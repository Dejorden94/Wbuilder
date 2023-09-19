{/* <article class="card">
<header class="card__header">
    <h1 class="card__heading">Card 1</h1>
</header>
<div>
    <section class="card__body">
        <p class="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolore itaque
            eius
            non? Recusandae, quisquam .</p>
    </section>
    <footer class="card__footer">
        <button class="card__action">Action</button>
    </footer>
</div>
</article> */}

fetch("../data/cards.json").then(response => response.json()).then(data => console.log(data));

