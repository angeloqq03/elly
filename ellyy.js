/*

PRE-UPDATE: NOV 3 (INTERFACE & PERFORMANCE

*/


document.addEventListener("DOMContentLoaded", function () {
  const cb = document.getElementById("chat-bubble");
  const cw = document.getElementById("chat-window");
  const cbt = document.getElementById("close-button");
  const cm = document.getElementById("chat-messages");

  // Function for payments
  
  function showForm(){
      location.assign('payment.html',1000);
  }
  
  function showcw() {
      cw.style.display = "block";
      setTimeout(() => {
          cb.style.display = "none";
      }, 60);
}

  function hidecw() {
      cw.style.display = "none";
      setTimeout(() => {
          cb.style.display = "block";
      }, 60);
  }

  cb.addEventListener("click", showcw);
  cbt.addEventListener("click", hidecw);

  function d() {
      cm.scrollTop = cm.scrollHeight;
  }

  function delayy(message, delay) {
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve(message);
          }, delay);
      });
  }

  async function ini() {
      await subtop(["START CONVERSATION"], 1440);
  }

  function userr(message) {
      const cliMsg = document.createElement("div");
      cliMsg.className = "user-message";
      cliMsg.textContent = `You: ${message}`;
      cm.appendChild(cliMsg);
      d();
      console.log(message);
  }

  async function iosdl(message, delay) {
    const botm = document.createElement("img");
    botm.className = "qr";
    botm.src = 'iosdl.png';
    botm.textContent = `Elly: ${message}`;
    cm.appendChild(botm);
    d();
    console.log(message);
    await delayy(" ", delay);
}


async function androiddl(message, delay) {
  const botm = document.createElement("img");
  botm.className = "qr";
  botm.src = 'androiddl.png';
  botm.textContent = `Elly: ${message}`;
  cm.appendChild(botm);
  d();
  console.log(message);
  await delayy(" ", delay);
}

  async function rep(message, delay) {
      const botm = document.createElement("div");
      botm.className = "bot-message";

      botm.textContent = `Elly: ${message}`;
      cm.appendChild(botm);
      d();
      console.log(message);
      await delayy(" ", delay);
  }

  async function subtop(subtopics) {
      subtopics.forEach(async (subto1, index) => {
          const subitemd = document.createElement("div");
          subitemd.innerText = `${subto1}`;
          subitemd.className = "subto1-list-item";
          subitemd.addEventListener("click", async () => {
              await subtosel(subto1);
          });
          await delayy(" ", 1200);
          cm.appendChild(subitemd);
          d();
      });
  }

  async function subtosel(subto1) {
      userr(subto1);
      await delayy(" ", 400);
      if (subto1 === "START CONVERSATION") {
          await rep("Hello there my name is Elly, your Bot Assistant!", 400);
          await rep("Please select if you are an AGENT or PLAYER.", 400);
          await subsub(["PLAYER", "AGENT"], 400);
      } else {
          console.log("error");
      }
  }

  async function subsub(subsubs) {
      subsubs.forEach(async (subsubt, index) => {
          const subitemd = document.createElement("div");
          subitemd.innerText = `${subsubt}`;
          subitemd.className = "subsub-list-item";
          subitemd.addEventListener("click", async () => {
              await subsubsel(subsubt);
          });
          await delayy(" ", 3
          );
          cm.appendChild(subitemd);
          d();
      });
  }

  async function subsubsel(subsubt) {
      userr(subsubt);
      await delayy(" ", 400);

      // AGENT SIDE //

      const agent = {

          howto:{

          a:"HOW TO BE AN AGENT",
          //b:"HOW TO DOWNLOAD APP",
          c:"HOW TO GENERATE AGENT LINK",
          d:"HOW TO DOWNLOAD APP",
          // e:"HOW TO GENERATE AGENT LINK",
          f:"HOW TO CHECK AGENT LINK AND SEND TO YOUR FRIENDS OR HAVE THEM SCAN THE QRCODE TO SIGN UP to Change Password/Withdrawal PIN?",
          g:"HOW TO CREATE A SUB AGENT OR PLAYER ACCOUNT",
          h:"HOW TO SET SUB-AGENTS COMMISSION PERCENTAGE",
          i:"HOW TO CHECK AGENT COMMISSION DETAILS",
          j:"AGENT RULES",
          k:"FOR AGENT ASKING HOW TO INCREASE COMMISSION RATE",
          l:"NEW MODE OF PAYMENT FOR AGENT",
          m:"Delayed Commission/Follow Up",
          // n:" ",
          },
          account_info:{
          

          a:"Missing Credit/Balance",
          b:"Forgot Password",
          c:"Forgot User ID",
          d:"Stuck Balance",
          e:"Missing Promotion",
          f:"Missing Rebates",
          g:"VIP Level (Upgraded Concern)",
          h:"Game Maintenance / Issue",
          i:"Locked/Suspended Account",
          j:"Change Cash Out Account",
          

          },
          payment:{

          a:"Cash in Problems",
          b:"Cash out Problems",
          c:"New Mode of Payment for Players",
          d:"Agent Concern",
          e:"Referral Program",
          f:"",

          },


          rewards:{

            a:"Redeem Points",
            b:"SMS Received Claim (promotion)",
            c:"Free Credit",
            d:"How To Earn Points"
  
            },
        
            others:{

            a:"How To Earn More Money",
            b:"Exciting Rewards",
            c:"Account Profile Issues",
            d:"FAQ'S"

        }
          

      };



      

      // player side
      
      
      const player = {


        howto:{


        a:"HOW TO REGISTER",
        b:"HOW TO DOWNLOAD THE APP",
        c:"HOW TO CHECK TURNOVER",
        d:"HOW TO BIND BANK/E-WALLET",
        e:"HOW TO CASH IN",
        f:"HOW TO CASH OUT", 
        g:"HOW TO CLAIM FDB",
        h:"HOW TO CLAIM BIRTHDAY BONUS",

      
        },
      

        account_info:{
        

          a:"HOW TO CHANGE PASSWORD",
          b:"HOW TO CHANGE MOBILE NUMBER",
          c:"HOW TO CHANGE WITHDRAWAL PIN",
          d:"HOW TO DELETE ACCOUNT",
          e:"HOW TO REGISTER",
          //f:" ",
          //g:" ",
          //h:" ",
          //i:" ",
          //j:" ",
          //k:" ",
           /* a:"Missing Credit/Balance",
        b:"Forgot Password",
        c:"Forget User ID",
        d:"Stuck Balance",
        e:"Missing Promotion",
        f:"Missing Rebates",
        g:"VIP Level (Upgraded Concern)",
        h:"Game Maintenance / Issue",
        i:"Locked/Suspended Account",
        j:"Change Cash Out Account",
        */
      

        },


        payment:{


        a:"Cash in Problems",
        b:"Cash out Problems",
        c:"New Mode of Payment for Players",
        //d:"Agent Concern",
        e:"Referral Program",
        

        },


        rewards:{


          a:"Redeem Points",
          b:"SMS Received Claim (promotion)",
          c:"Free Credit",
          d:"How To Earn Points",
          //e:" ",
          //f:" ",
         /// g:" ",
         // h:" ",


          },
      
          others:{


          a:"How To Earn More Money",
          b:"Exciting Rewards",
          c:"Account Profile Issues",
          d:"FAQ'S"


      }
        

    }
     

      // await rep(" ",700);

      // await subsub([" "," "," "]);


      // AGENT CB (CODE BLOCKS) //


      
    if (subsubt === "AGENT"  || subsubt === "Back to menu." || subsubt === "GO BACK TO MENU."){


      await subsub(["AGENT MATTERS","OTHERS"]); //root
    } else if (subsubt === "AGENT MATTERS"  || subsubt === "No, I changed my mind" || subsubt === "Back.") { // HOW TO
      await subsub([agent.howto.a,agent.howto.c,agent.howto.d,agent.howto.f,agent.howto.g,agent.howto.h,agent.howto.i,agent.howto.j,agent.howto.k,agent.howto.l,agent.howto.m,"GO BACK TO MENU."],1444);


    } else if (subsubt === "HOW TO BE AN AGENT") {


      await rep("If you have a player account with us and you can able to bring in and invite more to join to play in our website, you are eligible to be an agent. If you have lees than 5 players unfortumately we only allow agents with experience and can bring more active players and can keep the increasing numbers of your invited players.",800);
      
      await rep("Would you like to proceed?",1000);

      await subsub(["Yes, Proceed","No, I changed my mind"],990);


    } else if (subsubt === "Yes, Proceed")  {


      await rep("Redirecting you now...",2000);

      await location.assign('payment.html',1000);


    } else if (subsubt=== agent.howto.d) {

      await rep("Dear, after you click the download. You may scan the qr code to proceed on downloading the app. Thank you!",1200);

      await subsub(["Download for IOS","Download for Android"],1000);

    } else if (subsubt === "HOW TO GENERATE AGENT LINK") {


      await rep("1. Click Link Management.",800);

      await rep("2. Click the QR Code Buttons.",800);

      await rep("3. Register Type",800);

      await rep("4. Click the link for registration.",800);

      await rep("5. Choose a Player, choose Permanent, choose Facebook, Rebate setting: choose the lowest",800);

      await rep("6. Click Generate Link",800);

      await subsub(["Back to menu."],800);


    } else if (subsubt === "HOW TO CHECK AGENT LINK AND SEND TO YOUR FRIENDS OR HAVE THEM SCAN THE QRCODE TO SIGN UP to Change Password/Withdrawal PIN?") {

    
      await rep("1. Click the Agent Center button.",800);

      await rep("2. After logging in, click the Account button to go to managing referral links.",800);

      await rep("3. Click the QR CODE button.",800);

      await rep("4. Click the Copy link button.",800);
      
      await subsub(["Back to menu."],800);

    
    } else if (subsubt === "Back."){

    } else if (subsubt === "HOW TO CREATE A SUB AGENT OR PLAYER ACCOUNT") {


      await rep("1. Click the Agent Center button",800);

      await rep("2. Click the Account button to create an Agent or Player account.",800);

      await rep("3. Click the QRCODE button to go to managing referral links.",800);

      await rep("4. Click the Copy link button.",800);

      await subsub(["Back to menu."],800);


    } else if (subsubt === "HOW TO SET SUB-AGENTS COMMISSION PERCENTAGE") {


      await rep("1. Click the Agent Center button.",800);
      
      await rep("2. Click the Dividend button to set commission.",800);

      await rep("3. Click the Contract Management button and select the filter menu or enter a username to find, if not a specific agent, click the Create contract button on the name of the agent who wants to sign the contract.",800);

      await rep("4: In the rate (%) field, center the commission percentage of the agent. After the input is complete, click the Submit button to send the completed contract.",800);

      await subsub(["Back to menu."],800);


    } else if (subsubt === "HOW TO CHECK AGENT COMMISSION DETAILS") {

      //2 LINE BREAK SPACE FOR CODE VISIBILITY
      await rep("1. COMPLETE LOGIN",800);

      await rep("2. Click the MEMBERS button.",800);

      await rep("3. Click the Agent Center button.",800);

      await rep("4. Click the Dividend button to view the details of the commission.",800);

      await rep("5. Click Detail to view the dividend details rules.",800);

      await rep("6. Click Current to switch the dividend report date.",800);

      await subsub(["Back to menu."],800);


    } else if (subsubt === "AGENT RULES") {


      await rep("Allow me to present the guidelines for agents at JILIBET. Upon joining, you'll earn 10% to 40% commission on any negative profits.",800);

      await rep("Commissions are disbursed every Sunday, beginning at 2:00 pm, directly to your agent's wallet. The potential earnings from JILIBET's commission are limitless.",800);

      await rep("Agents are strongly encouraged to invite players to sign up using their personal referral links.",800);

      await rep("This process is straightforward and lets you leverage your skills, such as inviting friends through platforms like Facebook, Instagram, YouTube, and more.",800);

      await rep("If your team's total recharge performance meets the required criteria, we'll reach out to discuss raising the commission rate beyond 40%. To calculate the net amount you receive for the day, a minimum of three active players is required.",800);

      await rep("To qualify as an active player, you must ensure that your downline engages in gameplay at least once a week. This participation is essential for accurately determining your earnings. Thank you for your cooperation.",800);

      await rep("Dear, just to inform you that the P&L statement would not include your loss. Thank you!",800);

      await subsub(["Back to menu."],800);


    } else if (subsubt === "FOR AGENT ASKING HOW TO INCREASE COMMISSION RATE") {


      await rep("You bring players here, and we can give you 10 to 40%. As long as you bring more players, we will also help you adjust the percentage based on the number of players you bring",800);
      
      await rep("FOR AGENT LACK OF ACTIVE PLAYERS are not eligible to claim a commission, you must have three or more active players. Thank you.",800);
      await rep("FOR AGENT ONLY THE PLAYER'S WIN AND NO NET AMOUNT RECEIVES OR COMMISSION are not eligible to claim commission because their players are winning money.",800);

      await rep("Agent commission payout day is every Sunday to Monday. Please wait patiently during this period. If you have not received the commission by Tuesday, please contact the agent's customer service to check on your commission status. *BRAND* appreciates your support and cooperation. Commissions are calculated once a week; they will be checked and then remitted to your agent account from Sunday to Monday.Please wait, and it will be automatically transferred to your agent account. The commis9sion report is updated every Sunday after 4:00 p.m. in the agent background, the P&L statement would not include your loss.",800);

      await rep("The agent commission is paid weekly and is released every Sunday through Monday. Weekly commission calculation period: Sunday 00:00:00 to Saturday 23:59:59.",800);

      await subsub(["Back to menu."],800);
      
      
    } else if (subsubt === "NEW MODE OF PAYMENT FOR AGENT") {


      await location.replace("payment.html",960);



    } else if (subsubt === "Delayed Commission/Follow Up") {


      await location.assign('payment.html',1200);


      // end of agent 
    } else if (subsubt === "ACCOUNTS") { // START OF ACCOUNT


      await subsub([agent.account_info.a,agent.account_info.b,agent.account_info.c,agent.account_info.d,agent.account_info.e,agent.account_info.f,agent.account_info.g,agent.account_info.h,agent.account_info.i,agent.account_info.j]);


    } else if (subsubt === "Missing Credit/Balance") { // START OF ACCOUNT


      await location.replace('payment.html',1200);

    } else if (subsubt === "Forgot Password") {

      await location.replace('payment.html',1200);

    } else if (subsubt === "Forgot User ID") {


      await location.replace('payment.html',1200);

    } else if (subsubt === "Stuck Balance") {


      await location.replace('payment.html',1200);      

    } else if (subsubt === "Missing Promotion") {


      await location.replace('payment.html',1200);

    } else if (subsubt === "Missing Rebates") {


      await location.replace('payment.html',1200);

    } else if (subsubt === "VIP Level (Upgraded Concern)") {


      await location.replace('payment.html',1200);

    } else if (subsubt === "Game Maintenance / Issue") {

      // player concern
      await rep("Dear, We inform you regarding our temporary System Maintenance of the Games Website until further notice, We apologize for the inconvenience has caused you, your balance will be able to appear once the maintenance will be completed. We can't commit time but our management is doing they're best to provide a new gaming experience. Your balance will be available to transfer/cash out once the maintenance is done. Thank you for your patience.",800);

      await subsub(["Back to main menu"],600);

    } else if (subsubt === "Locked/Suspended Account") {


      await location.replace('payment.html',1200);

    } else if (subsubt === "Change Cash Out Account") {


      await location.replace('payment.html',1200);

      //end of ACCOUNT  


    } else if (subsubt === "PAYMENTS") { // START OF PAYMENT


      await subsub([player.payment.a,player.payment.b,player.payment.c,agent.payment.e,]);


    } else if (subsubt === player.payment.a) {


      await rep("Please bear with us for a while as we redirect you for submitting a ticket.",1000);

      await location.replace('payment.html',1000);

       // REDIRECT WHILE NO B.E
    } else if (subsubt === "Cash out Problems") { // player concern

      await rep("Please bear with us for a while as we redirect you for submitting a ticket.",3000);

      await location.assign('payment.html',1000);

      

       // REDIRECT WHILE NO B.E

    } /* else if (subsubt === "New Mode of Payment for Players") {
      await rep(" ",800);
      await rep(" ",800);      DISABLED FOR NOW
      await rep(" ",800);
    } */  else if (subsubt === "Agent Concerns") {

      console.log("what?");

    } else if (subsubt === "New Mode of Payment for Players") {
      
      await location.replace("payment.html",1200);

    } else if (subsubt === "Referral Program") {


      await rep("1.  Login in your account.",800);

      await rep("2.  Click “REFERRAL”/”AFFILIATE PROGRAM”.",800);

      await rep("3.  Click “APPLY”.",800);

      await rep("4.  Share your referral ID, link and QR Code.",800);

      await subsub(["Back to menu."],800);

    } else if (subsubt === "Delayed Commission/Follow Up") { // agent matters 


      await rep(" ",800);

      await rep(" ",800);

      await rep(" ",800);


      // End of Payments


    } else if (subsubt === "REWARDS") { // rewards

      
      await location.assign('https://www.jiliplay88.com/m/activity','_blank',1200);


    } else if (subsubt === "Redeem Points") {
      

      await rep("N/A",800);

      await location.assign('https://www.jiliplay88.com/m/activity','_blank',1200);
 


    } else if (subsubt === "SMS Received Claim (promotion)") {

      await rep("N/A",800);
      
      await rep("N/A",800);

      await rep("N/A",800);

      await subsub(['Back to main menu'],400);

      
    } else if (subsubt === "Free Credit") {


      await rep("N/A",800);

      await rep("N/A",800);

      await rep("N/A",800);

      await location.assign('https://www.jiliplay88.com/promotions','_blank',1200);



    }  else if (subsubt === "GO TO PAGE") {


      await rep(" ",800);

      await alert('https://www.jiliplay88.com/promotions','_blank',1200);


    } else if (subsubt === "How To Earn Points") {

      await rep("N/A",800);

      await rep("N/A",800);

      await rep("N/A",800);

      await subsub(["Back to main menu"],1200);

      // END OF REWARDS


    } else if (subsubt === "OTHERS") {


      await rep("If you have a specific concern or issue that you are experiencing. Please don't hesitate to create and submit a ticket to us so that we are able to understand the situation better. Do you wish to proceed?",2000);
      
      await subsub(["Yes, Proceed.","No, Nevermind"],1500);


    } else if (subsubt === "Yes, Proceed.") {


      await rep("REDIRECTING YOU...",800);

      await location.assign('payment.html',1000);

      
    } else if (subsubt === "Exciting Rewards") {


      await rep(" ",800);

      await rep(" ",800);

      await rep(" ",800);


    } else if (subsubt === "Account Profile Issues") {


      await location.assign('payment.html',1000);


    } else if (subsubt === "FAQ'S") {


      window.open('https://www.jiliplay88.com/help#faqs','_blank',3000);


    } else if (subsubt ===  "No, Nevermind") {

      location.reload();

      //  END OF OTHERS 

      // ADD MORE IF NEEDED, MAKE SURE TO BIND IT WELL FROM PREVIOUS CODE FOR EXAMPLE
      // 
      
     /* 
        if (subsubt === "SAMPLE MAIN"){
          await rep("reply here if needed",600); //Note: set the delay to 0.6s seconds for optimalization.
          await alert('link of the site here or the page',3000); //Note: set the delay for atleast 3-4 seconds.
          await window.open('open the link here in new window','_blank',3000);  //Note: set the delay for atleast 3-4 seconds.
          await subsub(["SAMPLE UNDER 1","SAMPLE UNDER 2"],600); // Note: Here we define the other topic and call it back in the same block but make sure that you only add subtopics if the procedural logic is long.
         } else if (subsubt === "SAMPLE UNDER 1" || subsubt === "SAMPLE UNDER 2"){ // Note: As you can see I will call the subtopic "SAMPLE UNDER 1" in this code block. Now let's assume that we need to execute a code for both sample 1 and sample 2. Just use ta XOR operator.

         } else if (subsubt === "SAMPLE UNDER 1"){ //Note: If we only need to execute a specific code for that topic. Just simple call the defined topcis.

         }
        */
        

    } else if (subsubt === "PLAYER" || subsubt === "Back to main menu") {


      await subsub(["HOW TO","ACCOUNTS","PAYMENTS","REWARDS","OTHERS"]);


    } else if (subsubt === "HOW TO") {


      await rep("See topics for guides and instructions.",800);
      
      await subsub([player.howto.a,player.howto.b,player.howto.c,player.howto.d,player.howto.e,player.howto.f,player.howto.g,player.howto.h/*player.howto.h,player.howto.i,player.howto.j,player.howto.k */],100);


    } else if (subsubt === "HOW TO REGISTER") {

      await rep("1. Click “JOIN NOW” ",700);

      await rep("2. Fill out the details and your phone number, then click “Send Text Message”.",700);

      await rep("3. Fill in your SMS verification code and click “JOIN NOW”.",700);

      await rep("4. Registration completed.",700);

      await subsub(["JOIN NOW!"],700);

    } else if (subsubt === "JOIN NOW!") {
      await location.assign('https://www.jiliplay88.com/m/register' , 1200);
    } else if (subsubt==="HOW TO DOWNLOAD THE APP") {

      await rep("1.  Click “Download” and scan QR Code.",800);

      await rep("2.  Select your phone type (IOS, ANDROID).",800);

      await rep("3.  Click download and allow (make sure unknown resources are allowed).",800);

      await rep("4.  Click install.",800);
    
      await subsub(["Download for IOS","Download for Android"],1000);

    } else if (subsubt === "Download for Android") {

      await rep("Dear, scan this qr code to continue downloading the app.",1000);
      
      await rep("This qr code is for IOS",600);

      await androiddl();

      
    } else if (subsubt === "Download for IOS") {  

      await rep("Dear, scan this qr code to continue downloading the app.",1000);
      
      await rep("This qr code is for IOS",600);

      await iosdl();

    } else if (subsubt === "HOW TO CHECK TURNOVER") {


      await location.assign('payment.html',1000);

      await subsub(['Back to main menu'])


    } else if (subsubt === "Back to main menu") {


      await subsub(["HOW TO","ACCOUNTS","PAYMENTS","REWARDS","OTHERS"],1200);


    } else if (subsubt === "HOW TO BIND BANK/E-WALLET") {

      // BLANK 1
      await rep("Dear kindly go to security center on your account and then click the “Withdrawal” button, select Account Type, Withdrawal Account Number, Phone Verification, Set Withdrawal Password and click SUBMIT button after completing the information needed, your e-wallet/bank account is successfully binded. Thank you.",800);

      

      await subsub(["Back to main menu"],700);


    } else if (subsubt === "HOW TO CASH IN") {


      await rep("1.  Login your account. Click DEPOSIT.",800);

      await rep("2.  Select “GCASH/GRABPAY/BANKING”.",800);

      await rep("3.  Select “GCASH”, enter the amount to cash in and click “PROCEED”.",800);

      await rep(" 4.  You will be directed to the GCASH Login page, enter your GCASH Account number and enter your PIN",800);

      await rep("5.  GOODLUCK!",800);
      
      await subsub(["Back to main menu"],700);


    } else if (subsubt === "HOW TO CASH OUT") {


      await rep("1.  Login your account. Click “WITHDRAWAL”.",800);

      await rep("2.  Click “WITHDRAW”.",800);

      await rep("3.  Select your Cash OUT account and enter the amount and your withdrawal pin.",800);

      await rep(" 4.  Click “OK” and wait until the withdrawal will be approved.",800);

      await subsub(["Back to main menu"],700);


    } else if (subsubt === "HOW TO CLAIM FDB") {

      //await rep(" ",800);

      await location.assign('https://www.jiliplay88.com/m/activity',1200);



    } else if (subsubt === "HOW TO CLAIM BIRTHDAY BONUS") {

      /*
      Dear can you please provide the following:

Username:
Real Name:
Contact:

Dear for verification please kindly provide the following:

1) clear photo any of your VALID ID
2) selfie holding with SAME ID
total 2 different pictures

Dear, for validation of the account, please kindly provide the following details:

- your withdrawal account details
- your account balance
- your last deposit date and time
- your last 5 deposit amount
- your last withdrawal date and time

Thank you
      */

      await rep("Dear can you please provide the following: USERNAME, REAL NAME, CONTACT NUMBER",800);
      await rep(" FOR VERIFICATION: Any clear photo of your valid ID, selfie holding with the SAME ID. ",800);
      await rep(" FOR VALIDATION OF YOUR ACCOUNT:-your withdrawal account details, -your account balance, -your last deposit date and time, your last 5 deposit amount, -your last withdrawal date and time",800);
      
      await rep("Would you like to proceed?")

      await subsub(["Yes.","No."])


    } else if (subsubt === "Yes.") {


      await rep("Redirecting...",800);

      await location.replace('payment.html',1000);

    } else if (subsubt === "No.") {

      await subsub(["Back to main menu "],700);


    } else if (subsubt === " ") {


      await rep(" ",800);

      await rep(" ",800);

      await rep(" ",800);
      
      await subsub(["Back to main menu "],700);


    } else if (subsubt === " ") {

      
      await rep(" ",800);

      await rep(" ",800);

      await rep(" ",800);

      await subsub(["Back to main menu "],700);


    } else if (subsubt === " ") {


      await rep(" ",800);

      await rep(" ",800);

      await rep(" ",800);

      await subsub(["Back to main menu "],700);


    } else if (subsubt === " ") {


      await rep(" ",800);

      await rep(" ",800);

      await rep(" ",800);

      await subsub(["Back to main menu "],700);


    } else if (subsubt === " ") {


      await rep(" ",800);
      
      await rep(" ",800);

      await rep(" ",800);
      
      await subsub(["Back to main menu"],700);


    } else if (subsubt === " ") {


      await rep(" ",800);

      await rep(" ",800);

      await rep(" ",800);

      await subsub(["Back to main menu "],700);


    } else if (subsubt === " ") {


      await rep(" ",800);

      await rep(" ",800);

      await rep(" ",800);
      
      await subsub(["Back to main menu "],700);


    } else if (subsubt === " ") {


      await rep(" ",800);

      await rep(" ",800);

      await rep(" ",800);

      await subsub(["Back to main menu "],700);


    }

    

  }
  ini();

});
