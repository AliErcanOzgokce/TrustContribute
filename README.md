![TrustContribute](https://user-images.githubusercontent.com/78970916/162231549-646975b6-41b7-4355-ab5a-b339384deecb.png)

This project allows you to create fundraising campaigns for projects that haven't been released yet, and let your donors determine how you'll spend the money collected for aid.

## Main Window

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/78970916/162232870-815a8df9-299a-4922-a85b-eddfd435d293.gif)

## How To Use?
* First, for the create a new campaign click to create campaign button and add the minimum contribution amount.
* For the checking campaign status you can click view campaign button.
* After clicking view campaign button you can see the status of the campaign and also you can contribute for this campaign.
* When you contribute enough money you can approve the paying request on view request page.
* Only campaign owner can create paying request and finalize the request.
## Installing & Setup

First you need to install packages 
 ```bash
 npm install
 ```
 And you need to execute to compile.js file
 
 ```bash
 node compile.js
 ```
 
 After instalitation process complete you need to make some changes in /ethereum/deploy.js file
 
 ![carbon](https://user-images.githubusercontent.com/78970916/161441280-ccd91579-bd1b-4375-b6b9-73c151c19bbb.png)
 
 When your deployment process done you need to copy the contract address and paste to /ethereum/factory.js file
 
 ![carbon (1)](https://user-images.githubusercontent.com/78970916/161441404-374d3523-487a-4a27-ba5f-945ad4fd30f0.png)

 You're all set !

## Usage
For starting the TrustContribute

```bash
npm run dev
```

After starting go to there

http://localhost:3000/

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)


