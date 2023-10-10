const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json/',
	reportPath: './cypress/cucumber-report/',
	metadata:{
        browser: {
            name: 'chrome',
            version: '102'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows 10 Pro',
            version: '21H1'
        }
    },
    openReportInBrowser: true,
    pageTitle: 'PERSE - Test Automation Report',
    reportName: 'PERSE - Automation Report',
    displayDuration: true,
    durationInMS: false,
    displayReportTime: true,
    customData: {
        title: 'Run Info',
        data: [
            {label: 'Project', value: 'PERSE'},
            {label: 'Release', value: '22.04'},
            {label: 'Sprint', value: '3.1.22'}
        ]
    }
});