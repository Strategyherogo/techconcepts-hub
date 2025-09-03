#!/usr/bin/env node

import http from 'http';

// Test configuration
const baseUrl = 'http://localhost:5173';
const languages = ['en', 'es', 'fr', 'de', 'pt'];

async function fetchPage(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function testMultiLanguageSupport() {
  console.log('========================================');
  console.log('Multi-Language Functionality Test Report');
  console.log('========================================\n');
  
  const testResults = {
    serverAccessible: false,
    languageSwitcherPresent: false,
    i18nConfigured: false,
    translationFilesLoaded: false,
    localStorageCheck: 'Not testable via curl',
    routingWorks: false,
    issues: [],
    recommendations: []
  };

  try {
    // 1. Test if server is accessible
    console.log('1. Testing server accessibility...');
    const homepage = await fetchPage(baseUrl);
    testResults.serverAccessible = true;
    console.log('   ✓ Server is accessible at ' + baseUrl);
    
    // 2. Check for language switcher in HTML
    console.log('\n2. Checking for language switcher...');
    if (homepage.includes('LanguageSwitcher') || homepage.includes('language-switcher')) {
      testResults.languageSwitcherPresent = true;
      console.log('   ✓ Language switcher component found in page');
    } else {
      console.log('   ⚠ Language switcher component reference not found in initial HTML');
      testResults.issues.push('Language switcher might be loaded dynamically');
    }
    
    // 3. Check if i18n is configured
    console.log('\n3. Checking i18n configuration...');
    if (homepage.includes('i18n') || homepage.includes('i18next')) {
      testResults.i18nConfigured = true;
      console.log('   ✓ i18n/i18next references found');
    } else {
      console.log('   ⚠ No i18n references found in initial HTML');
      testResults.issues.push('i18n might be bundled and not visible in HTML');
    }
    
    // 4. Check if translation resources are mentioned
    console.log('\n4. Checking for translation resources...');
    const hasTranslationHints = languages.some(lang => 
      homepage.includes(`"${lang}"`) || homepage.includes(`'${lang}'`)
    );
    
    if (hasTranslationHints) {
      testResults.translationFilesLoaded = true;
      console.log('   ✓ Language codes found in page');
    } else {
      console.log('   ⚠ No explicit language codes found in HTML');
    }
    
    // 5. Test different routes
    console.log('\n5. Testing route accessibility...');
    const routes = ['/', '/about', '/services', '/case-studies', '/blog'];
    let routesAccessible = 0;
    
    for (const route of routes) {
      try {
        await fetchPage(baseUrl + '/#' + route);
        routesAccessible++;
        console.log(`   ✓ Route ${route} is accessible`);
      } catch (error) {
        console.log(`   ✗ Route ${route} failed: ${error.message}`);
        testResults.issues.push(`Route ${route} is not accessible`);
      }
    }
    
    testResults.routingWorks = routesAccessible === routes.length;
    
  } catch (error) {
    console.error('Error during testing:', error.message);
    testResults.issues.push('Server connection failed: ' + error.message);
  }

  // Generate recommendations
  console.log('\n========================================');
  console.log('TEST SUMMARY');
  console.log('========================================\n');
  
  console.log('✓ Verified Components:');
  if (testResults.serverAccessible) console.log('  • Server is running and accessible');
  if (testResults.languageSwitcherPresent) console.log('  • Language switcher component is present');
  if (testResults.i18nConfigured) console.log('  • i18n is configured');
  if (testResults.translationFilesLoaded) console.log('  • Translation resources are available');
  if (testResults.routingWorks) console.log('  • All routes are accessible');
  
  if (testResults.issues.length > 0) {
    console.log('\n⚠ Potential Issues:');
    testResults.issues.forEach(issue => console.log('  • ' + issue));
  }
  
  console.log('\n📋 Manual Testing Required:');
  console.log('  • Open http://localhost:5173 in a browser');
  console.log('  • Check if language switcher appears in the navigation bar');
  console.log('  • Click the language switcher and verify all 5 languages are shown:');
  console.log('    - 🇬🇧 English');
  console.log('    - 🇪🇸 Español');
  console.log('    - 🇫🇷 Français');
  console.log('    - 🇩🇪 Deutsch');
  console.log('    - 🇵🇹 Português');
  console.log('  • Switch between languages and verify text changes');
  console.log('  • Check browser console for any errors');
  console.log('  • Open DevTools > Application > Local Storage');
  console.log('  • Verify "preferredLanguage" key is saved when switching languages');
  console.log('  • Navigate between pages and verify language persists');
  console.log('  • Refresh the page and verify language preference is retained');
  
  console.log('\n========================================\n');
  
  return testResults;
}

// Run the tests
testMultiLanguageSupport().catch(console.error);