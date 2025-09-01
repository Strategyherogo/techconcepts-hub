#!/usr/bin/env python3
"""
Cloudflare DNS Configuration for techconcepts.org
Configures DNS records for GitHub Pages hosting
"""

import requests
import json
import sys
import time

def get_credentials():
    """Get Cloudflare credentials from user"""
    print("\n🔐 Cloudflare DNS Configuration for techconcepts.org")
    print("=" * 50)
    print("\nTo get your credentials:")
    print("1. API Token: Go to https://dash.cloudflare.com/profile/api-tokens")
    print("   - Click 'Create Token'")
    print("   - Use 'Edit zone DNS' template")
    print("   - Include techconcepts.org zone")
    print("\n2. Zone ID: Go to techconcepts.org overview in Cloudflare")
    print("   - Find Zone ID in the right sidebar")
    print("=" * 50)
    
    api_token = input("\n📝 Enter your Cloudflare API Token: ").strip()
    zone_id = input("📝 Enter your Zone ID for techconcepts.org: ").strip()
    
    return api_token, zone_id

def check_existing_records(api_token, zone_id):
    """Check for existing DNS records"""
    headers = {
        "Authorization": f"Bearer {api_token}",
        "Content-Type": "application/json"
    }
    
    url = f"https://api.cloudflare.com/client/v4/zones/{zone_id}/dns_records"
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"❌ Error checking records: {e}")
        return None

def delete_record(api_token, zone_id, record_id):
    """Delete a DNS record"""
    headers = {
        "Authorization": f"Bearer {api_token}",
        "Content-Type": "application/json"
    }
    
    url = f"https://api.cloudflare.com/client/v4/zones/{zone_id}/dns_records/{record_id}"
    
    try:
        response = requests.delete(url, headers=headers)
        response.raise_for_status()
        return True
    except:
        return False

def create_dns_record(api_token, zone_id, record_type, name, content, proxied=False):
    """Create a DNS record in Cloudflare"""
    headers = {
        "Authorization": f"Bearer {api_token}",
        "Content-Type": "application/json"
    }
    
    data = {
        "type": record_type,
        "name": name,
        "content": content,
        "ttl": 1,  # Auto
        "proxied": proxied
    }
    
    url = f"https://api.cloudflare.com/client/v4/zones/{zone_id}/dns_records"
    
    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        result = response.json()
        if result.get("success"):
            return True, result
        else:
            return False, result
    except requests.exceptions.RequestException as e:
        return False, str(e)

def main():
    # Get credentials
    api_token, zone_id = get_credentials()
    
    print("\n🔍 Checking existing DNS records...")
    existing = check_existing_records(api_token, zone_id)
    
    if existing and existing.get("success"):
        records = existing.get("result", [])
        
        # Check for conflicting records
        for record in records:
            if record["name"] in ["techconcepts.org", "www.techconcepts.org"]:
                print(f"⚠️  Found existing record: {record['name']} -> {record['content']}")
                delete = input(f"Delete this record? (y/n): ").lower()
                if delete == 'y':
                    if delete_record(api_token, zone_id, record["id"]):
                        print(f"✅ Deleted {record['name']}")
                    else:
                        print(f"❌ Failed to delete {record['name']}")
    
    print("\n🚀 Configuring DNS records for GitHub Pages...")
    
    # DNS records to create
    records_to_create = [
        {
            "type": "CNAME",
            "name": "techconcepts.org",
            "content": "strategyherogo.github.io",
            "proxied": False,
            "description": "Main domain"
        },
        {
            "type": "CNAME", 
            "name": "www",
            "content": "techconcepts.org",
            "proxied": False,
            "description": "WWW subdomain"
        }
    ]
    
    # Create records
    for record in records_to_create:
        print(f"\n📝 Creating {record['description']}: {record['name']} -> {record['content']}")
        success, result = create_dns_record(
            api_token, 
            zone_id,
            record["type"],
            record["name"],
            record["content"],
            record["proxied"]
        )
        
        if success:
            print(f"✅ Successfully created {record['name']}")
        else:
            print(f"❌ Failed to create {record['name']}: {result}")
    
    print("\n" + "=" * 50)
    print("✨ DNS Configuration Complete!")
    print("\n📋 Next Steps:")
    print("1. DNS propagation takes 5-30 minutes")
    print("2. GitHub Pages will automatically provision SSL certificate")
    print("3. Your site will be available at:")
    print("   - https://techconcepts.org")
    print("   - https://www.techconcepts.org")
    print("\n💡 You can check DNS propagation at:")
    print("   https://www.whatsmydns.net/#CNAME/techconcepts.org")
    print("\n🔒 SSL/TLS Settings in Cloudflare:")
    print("   Go to SSL/TLS → Set to 'Full' mode")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n👋 Configuration cancelled by user")
        sys.exit(0)
    except Exception as e:
        print(f"\n❌ Unexpected error: {e}")
        sys.exit(1)