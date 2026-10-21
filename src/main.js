import { worldCupList } from './data'
import { renderGames } from './render'
import './style.css'

renderGames(worldCupList)

window.showDetail=function showDetail(id) {
    console.log(id);
    const selectedGame=worldCupList.find(obj=>obj.id==id)
    alert(`${selectedGame.winner}-${selectedGame.runner_up} \n \n ${selectedGame.venue} \n \n ${selectedGame.location} \n \n NÉZŐK SZÁMA:${selectedGame.attendance}`)
}

window.handleSearch=function handleSearch() {
    const searchedTeam=document.getElementById('cim').value
    console.log(searchedTeam);
    const filteredTeam=worldCupList.filter(obj=>obj.winner.toLowerCase().includes(searchedTeam.toLowerCase())  || obj.runner_up.toLowerCase().includes(searchedTeam.toLowerCase()))
    renderGames(filteredTeam)
    const msg=filteredTeam.length==0 ? `<h2>Nincs találat! A keresett kifejezés: ${searchedTeam} ! </h2>`: `<h2>${searchedTeam} az alábbi döntőkben vett részt:</h2>`
    document.querySelector('.msg').innerHTML=msg
}

window.handleClear=function handleClear() {
    renderGames(worldCupList)
    document.querySelector('.msg').innerHTML=''
}