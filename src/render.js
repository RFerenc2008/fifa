export function renderGames(arr){
    const cardString=arr.map(obj=>`
        <div class="card">
            <h2>${obj.year} év győztese:${obj.winner}</h2>
            <p>Az eredmény:${obj.score}</p>
            <p>A második helyezett:${obj.runner_up}</p>
            <button onclick="showDetail(${obj.id})">Részletek...</button>
      </div>
        `).join('')
        document.querySelector('.games').innerHTML=cardString
}