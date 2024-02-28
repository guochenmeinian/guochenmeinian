const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

let monthNames = ["Jan","Feb","Mar","Apr", "May","Jun","Jul","Aug", "Sep", "Oct","Nov","Dec"];

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return `{ ${progressBar} }`
}

const readme = `\
# Hi there! 👋
<p align="center">
<a href="https://twitter.com/apoorv__tyagi" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg" alt="apoorv__tyagi" height="30" width="30" /></a>&nbsp;
<a href="https://linkedin.com/in/apoorvtyagi" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="apoorvtyagi" height="30" width="30" /></a>&nbsp;
<a href="http://discord.com/users/apoorv#4040" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/discord.svg" alt="apoorv#4040" height="40" width="30" /></a>&nbsp;
<a href="https://www.buymeacoffee.com/apoorvtyagi"><img align="center" alt="Buy me a Coffee" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/buymeacoffee.svg" /></a>
</p>

![](https://camo.githubusercontent.com/992babdffd8c74a1502de375fbdf7e4d54773242/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f53576f536b4e36447854737a71494b4571762f67697068792e676966)

### <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Developer.gif" width="45" /> About Me:
- 🏦 I’m currently a first-year computer science graduate student studying at [New York University](https://cs.nyu.edu) <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30">
- 📝 I regulary write blogs at my personal [website](https://main--guochenmeinian.netlify.app/about/)
- 💻 I use: **.py**, **.js**, **.java**, **.cpp**
- 📖 I am currently reading **Designing Data Intensive Application** by Martin Kleppmann
- 💬 Talk to me about music, AI, finance, silicon valley & startups
- 👯 Please feel free to reach out at guochenmeinian@nyu.edu
- ⚡ Pronouns: He/His/Him
- 🧑‍💻 Tech I work on :

<p align="center">
      <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg" alt="java" width="65" height="65"/> 
      <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" alt="python" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="Nodejs" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="GIT" width="55" height="55"/> 
      <img src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" alt="kubernetes" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg" alt="eastic" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" alt="azure" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/docker/docker-official.svg" alt="docker" width="60" height="50"/>
      <img src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" alt="mysql" width="45" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="mongodb" width="45" height="55"/>
</p>

---
### <img src='https://media1.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif?cid=ecf05e47x2g034i9pzwtzzsd3xgg2w9nr94t4tflbbgo3008&rid=giphy.gif' width='25' /> My Github Stats:
![Chenmeinian's github stats](https://github-readme-stats.vercel.app/api?username=guochenmeinian&show_icons=true&title_color=ffc857&icon_color=8ac926&text_color=daf7dc&bg_color=151515&hide=issues&count_private=true&include_all_commits=true)
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=guochenmeinian&layout=compact&text_color=daf7dc&bg_color=151515&hide=css,html,php)](https://github.com/anuraghazra/github-readme-stats)
[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=guochenmeinian&theme=dark)](https://git.io/streak-stats)

⏳ **Year Progress** { ████▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ } 15.86 % as on ⏰ 27-Feb-2024
`
console.log(readme)