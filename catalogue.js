var rItem = React.createClass({
    render: function() {
        return(

                <div className="container">
                    <header className="major">
                        <h2>Catalogue Klee Store</h2>
                        <p>Plus que 15 jours pour augmenter vos points !</p>
                    </header>
                    <div className="row 150%">
                        <div className="4u 12u$(medium)">
                            <section className="box">
                                <a href = "quiz.html"><i className="icon big rounded color1 fa-globe"></i></a>
                                <h3>Quiz PIB</h3>
                                <p><span>Testez vos connaissances des PIB de différents pays</span></p>
                            </section>
                        </div>
                        <div className="4u 12u$(medium)">
                            <section className="box">
                                <i className="icon big rounded color9 fa-bar-chart"></i>
                                <h3>Jeu de consensus</h3>
                                <p>Montrez-nous vos connaissances en terme de dimensionnement des projets</p>
                            </section>
                        </div>
                        <div className="4u$ 12u$(medium)">
                            <section className="box">
                                <i className="icon big rounded color6 fa-group"></i>
                                <h3>Valeurs de Klee</h3>
                                <p>Vous pensez connaître les valeurs Klee ? Montrez-nous !</p>
                            </section>
                        </div>
                    </div>

                    <div className="row 150%">
                        <div className="4u 12u$(medium)">
                            <section className="box">
                                <a href = "quiz.html"><i className="icon big rounded color12 fa-dashboard"></i></a>
                                <h3>Dashboard</h3>
                                <p><span>Pilotez la progression de votre projet par la gamification</span></p>
                            </section>
                        </div>
                        <div className="4u 12u$(medium)">
                            <section className="box">
                                <i className="icon big rounded color8 fa-cogs"></i>
                                <h3>Humeur</h3>
                                <p>Dites-nous comment vous vous sentez aujourd&apos;hui</p>
                            </section>
                        </div>
                        <div className="4u$ 12u$(medium)">
                            <section className="box">
                                <i className="icon big rounded color2 fa-legal"></i>
                                <h3>Management</h3>
                                <p>Testez vos connaissances en management de projet</p>
                            </section>
                        </div>
                    </div>
                    <div className="row 150%">
                        <div className="4u 12u$(medium)">
                        <font size="-3" color= "#444">.</font>
                        </div>
                        <div className="4u 12u$(medium)">
                            <section className="box">
                                <a href = "quiz.html"><i className="icon big rounded color1 fa-calendar"></i></a>
                                <h3>Gestion</h3>
                                <p><span>Testez vos connaissances en gestion du temps</span></p>
                            </section>
                        </div>
   
                    </div>
                </div>
        );
    }
});


var result = React.createElement(rItem);
React.render(result,document.getElementById("catalogue"));
