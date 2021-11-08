// SIMPLE NODEJS HOST MAKER
console.clear()

// SIMPLE NODEJS HOST MAKER
const fs = require('fs');
const p = require('prompt-sync')();

// SIMPLE NODEJS HOST MAKER
console.log(`Simple Node Host Maker (Version 1.0.1)\nCopyright (C) 2021 WilliamNS. All rights reserved\n`)
// Wkwkwkwkwk CopyRight (Biar Keren Ya Kan)

// SIMPLE NODEJS HOST MAKER
const name = p("[?] File Name : ")
const ip = p("[?] IP Address : ")

// SIMPLE NODEJS HOST MAKER
fs.writeFileSync(`${name}.txt`,`${ip} growtopia1.com\n${ip} growtopia2.com`);

// SIMPLE NODEJS HOST MAKER
console.log("[?] Succesfully created host file...")
console.log(`[?] With IP (${ip})`)
