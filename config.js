const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUt0amZhdGtRMUQ2QkV6cDFXVTFlNnA3K2xNQmU5bG5zcE9QcVhRSUtHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVStWZE1uSjF4UzljTmI4M2E0eFhhRDYrZFRNMzE1d09oQWc1S3pYSkJBbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTE9hUUMrNWsvbXgrNjdWOUNVdXllQ0RWU3p6Q1pLWDhZT0dtK1duamxFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSE5wQTg3VExyRjl3TjFqc2pOR1htL1ZZQ3lFSjZKUHN1eXZxeWdOeW5rPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllQM2tOWUhYZUw1TVdCRDFaVUlQMkJ1eFp5cm9qN1JBUmVoa1BOSVExVU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhhV2h1VmtQTXNGTUNEZW1qZ2RXUWhKWkdWdjJ6a24vbVJsZjZ0WEZRRFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic01ZNlVVUVBublZadGRPZElrY2lZSVkwcjJxTlBXc0tIUm91M2RlempIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiekhkN3pNSE4zSzhaZDI3ME1PSTk5a0UrVWljQXNVdHNXUkpNZExkYk5qaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdObUlkSVdnYUYyTXMyTGRpNDZwZHpuUWM0aWlMTEZ2dkEvMFBTN0hqUHo0aVcyTk1XRzJ4cGZRTFg5d0VDOW1BNldEN014Q1JmeVUxZm1qajd1TkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiI3amROZTNFZ2ZtR2VvUzU5d1VxcCs1ZEl1ems0aC9MeVNmOWJKVkl2T0ZFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ2MzY0Njk1M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUUxRTI3RDdCNEFBM0Y3NkZERUM3QUVFRUUyOTgyQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYwNzM4ODY2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0NjM2NDY5NTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVCRjNFQTI3QjY3MTVDNUJBODBEODlDMUYyQjVCMTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MDczODg2N30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDYzNjQ2OTUzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1MTFBODQ1OTZDMEFBQzdCRTJGRDY2RUY0QkNGN0JDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjA3Mzg4Njl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkQ4QkxUV0ZNIiwibWUiOnsiaWQiOiI5MjM0NjM2NDY5NTM6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSEFDS0VSIiwibGlkIjoiMTk1Mjk3MDYxOTE2NzE4OjExQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVdKN3FvRkVLMzh5c2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU2x1Nzd3cVBqbWUrUUhmb0p4M00veVFhd0tLMFQwQnk2dXplWnNkMWxCRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibGMvc0h1VmNqZmJZbE9yR1RwV0hUZHZxNU1uTzJ4V0FjbEZrMnBtS083TkJqWTlvZktNQUtYYVU1STFaQWY2NTFxSlVPK29UMXh4MkthY3JpQ01LRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IkNiaHB1RW9nbWxEdjZjZlR2M0s1ODNqKzlnQ3JPYzgrMkJ2RFlvOGpscGQ1SHdlc3lsK1REQmp6QnFRemF5bFh4R3djZ29wQ1dUUitPckcyM1EzSERBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDYzNjQ2OTUzOjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVwYnUrOEtqNDVudmtCMzZDY2R6UDhrR3NDaXRFOUFjdXJzM21iSGRaUVIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MDczODg2NCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMazAifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ADEEL-MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/hg5hj6.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ADEEL-MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "ADEEL-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923035512967",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ADEEL-MD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴅᴇᴇʟ-ᴍᴅ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/hg5hj6.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*ADEEL-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923035512967",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
