const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');
const delay = require('delay');

const GoStumble = (code, auth) => new Promise((resolve, reject) => {

    fetch(`http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/${code}`, {
        method: 'GET',
        headers: {
            'authorization': auth
        }
    })
    .then(res => res.text())
    .then(data=> {
        resolve(data);
    })
    .catch(err => {
        reject(err);
    });

});

(async () => {

    console.log(`

  ZZZZZZZZZZZZZZ  ${chalk.redBright('|')}    H     H    AAAAAAA    CCCCCCCC    K    K
              Z   ${chalk.redBright('|')}    H     H    A     A    C           K   K
            Z     ${chalk.redBright('|')}    H     H    A     A    C           K  K 
          Z       ${chalk.redBright('|')}    HHHHHHH    A AAAAA    C           KKK 
        Z         ${chalk.redBright('|')}    H     H    A     A    C           K  K 
      Z           ${chalk.redBright('|')}    H     H    A     A    C           K   K
     Z            ${chalk.redBright('|')}    H     H    A     A    C           K    K 
  ZZZZZZZZZZZZZ   ${chalk.redBright('|')}    H     H    A     A    CCCCCCCC    K     K
Round:
1. ${chalk.redBright('Round 3 Win')}
2. ${chalk.red('Round 3 Eleminated')}
3. ${chalk.greenBright('Round 2 Eleminated')}
4. ${chalk.blueBright('Round 1 Eleminated')}

${chalk.blueBright('Ban Tanggung Sendiri!')}
`);

    
    const feature = rs.question('[XcBot] Ketik pilihan mu! : ');

    if (feature == '1') {

        const auth = rs.question('[Xcbot] Masukkan auth kamu disini! : ');
        const time = rs.question('[XcBot] Ketik delay yang anda inginkan(MiliSecond) : ');
        console.log('');

        while (true) {

            var code = '3';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[${moment().format('HH:mm:ss')}] Salah Auth Atau expired!`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                const crown = data.User.Crowns;
                
                console.log(chalk.blueBright(`[${moment().format('HH:mm:ss')}] Username : ${username} | Country : ${country} | ${chalk.magenta(`Pass Exp : ${tokenPass}`)} | ${chalk.magenta(`Trophy : ${trophy}`)} | ${chalk.magenta(`Crown : ${crown}`)}`));
                await delay(time)

            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Cie Kena Ban !`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }
        
    } else if (feature == '2') {

        const auth = rs.question('[Xcbot] Masukkan auth kamu disini! : ');
        const time = rs.question('[XcBot] Ketik delay yang anda inginkan(MiliSecond) : ');
        console.log('');

        while (true) {

            var code = '2';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[${moment().format('HH:mm:ss')}] Salah Auth Atau expired!`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                
                console.log(chalk.blueBright(`[${moment().format('HH:mm:ss')}] Username : ${username} | Country : ${country} | ${chalk.magenta(`Pass Exp : ${tokenPass}`)} | ${chalk.magenta(`Trophy : ${trophy}`)}`));
                await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[${moment().format('HH:mm:ss')}] Cie Kena Ban !`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }

    } else if (feature == '3') {

        const auth = rs.question('[Xcbot] Masukkan auth kamu disini! : ');
        const time = rs.question('[XcBot] Ketik delay yang anda inginkan(MiliSecond) : ');
        console.log('');

        while (true) {

            var code = '1';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[${moment().format('HH:mm:ss')}] Salah Auth Atau expired!`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                
                console.log(chalk.blueBright(`[${moment().format('HH:mm:ss')}] Username : ${username} | Country : ${country} | ${chalk.magenta(`Pass Exp : ${tokenPass}`)} | ${chalk.magenta(`Trophy : ${trophy}`)}`));
                await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[${moment().format('HH:mm:ss')}]Cie Kena Ban !`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }

    } else if (feature == '4') {

        const auth = rs.question('[Xcbot] Masukkan auth kamu disini! : ');
        const time = rs.question('[XcBot] Ketik delay yang anda inginkan(MiliSecond) : ');
        console.log('');
        
        while (true) {

            var code = '0';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[${moment().format('HH:mm:ss')}] Salah Auth Atau expired!`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                
                console.log(chalk.blueBright(`[${moment().format('HH:mm:ss')}] Username : ${username} | Country : ${country} | ${chalk.magenta(`Pass Exp : ${tokenPass}`)} | ${chalk.magenta(`Trophy : ${trophy}`)}`));
                await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[${moment().format('HH:mm:ss')}] Cie Kena Ban !`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }

    } else {

        console.log(chalk.red(`\n[${moment().format('HH:mm:ss')}] Anda Memasukan Kata Yang Salah !`));

    }
    

})();
