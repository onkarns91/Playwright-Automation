/// <reference types="node" />
const config= {


  projects:[

   { name : 'chrome',
    use : {
      browserName : 'chromium',
      headless : false,
      screenshot : 'off',
      video : 'off',
      trace : 'off',
      //visualViewport :{}
      ignoreHttpsError : true,
      Permissions : ['geolocation'],
      //...devices[''],

    }},

    { name : 'safari',
    use : {
      browserName : 'webkit',
      headless : false,
      screenshot : 'off',
      video : 'off',
      trace : 'off',
      //visualViewport :{}
      ignoreHttpsError : true,
      Permissions : ['geolocation'],
      //...devices[''],

    }}
  ],
  testDir: './tests/',
    retries : 1,
    workers : 3,
    reporter: 'html',





}
module.exports=config