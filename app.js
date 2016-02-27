//v. 1.2.0
//================================================================================================

// Recuperation du fichier json
// $.getJSON('DataUsers.json', function(jsonfile) {
// if (localStorage.getItem('data'))
//     {
//         var DataUsers = JSON.parse(localStorage.getItem('data'));
//     }
// else 
//     {
//     DataUsers= jsonfile;
//     var dataToStore = JSON.stringify(DataUsers);
//     localStorage.setItem('data', dataToStore);
//     };

var datafb = new Firebase('https://kleegp.firebaseio.com/'); 
//console.log(datafb);

datafb.on("value", function(data) {
    var DataUsers = data.child("users").val();
    console.log(DataUsers);



// ReactJS

var rheader = React.createClass({
    render: function() {
        return(
            <div>

                <h1><a href="index.html">KGP</a></h1>
                <nav id="nav">
                    <ul>
                        <li><a href="index.html">Accueil</a></li>
                        <li><a href="catalogue.html">Klee Store</a></li>
                        <li><a href="auction.html">Enchères</a></li>
                        <li><a id="SignUp" href="#" className="button special">{this.props.user}</a></li>        
                    </ul>
                </nav>

            </div>  
        );
    }
});
var result = React.createElement(rheader,{user : DataUsers[0].prenom});

React.render(result,document.getElementById("headerReact"));
//button special

var rBanner = React.createClass({
    render: function() {
        return(
            <div>

                <h2>Klee Gamification Platform</h2>
                <p>{this.props.user}, bienvenue sur la plateforme !</p>
                <ul className="actions">
                    <li>
                        <a href="#one" className="button big">Consulter vos résultats<span id = "accueil"></span></a>
                    </li>
                </ul>

            </div>
        );
    }
});



var result = React.createElement(rBanner, {user : DataUsers[0].prenom});
React.render(result,document.getElementById("bannerReact"));


var rOne = React.createClass({
    render: function() {
        return(
                <div className="container">
                    <header className="major">
                        <h2>Vos résultats</h2>
                        <p>Plus que 15 jours pour augmenter vos points !</p>
                    </header>
                    <div className="row 150%">
                        <div className="4u 12u$(medium)">
                            <section className="box">
                                <i className="icon big rounded color1 fa-rocket"></i>
                                <h3>Klee Points</h3>
                                <p><span>{this.props.user}, vous avez gagné <b>{this.props.point}</b> Klee Points</span></p>
                            </section>
                        </div>
                        <div className="4u 12u$(medium)">
                            <section className="box">
                                <i className="icon big rounded color9 fa-empire"></i>
                                <h3>Badges</h3>
                                <p>Bravo, vous disposez des badges suivant : <b>{this.props.badge}</b></p>
                            </section>
                        </div>
                        <div className="4u$ 12u$(medium)">
                            <section className="box">
                                <i className="icon big rounded color6 fa-trophy"></i>
                                <h3>Trophées</h3>
                                <p>Voici vos trophées dûment mérités  : <b>{this.props.trophy}</b></p>
                            </section>
                        </div>
                    </div>
                </div>
        );
    }
});

var result = React.createElement(rOne,{user  : DataUsers[0].prenom, point : DataUsers[0].point, badge : DataUsers[0].badge, trophy : DataUsers[0].trophy});
React.render(result,document.getElementById("oneReact"));




// var rTwo = React.createClass({
//     render: function() {
//         return(
//                 <div className="container">
//                     <header className="major">
//                         <h2>Lorem ipsum dolor sit</h2>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, autem.</p>
//                     </header>
//                     <section className="profiles">
//                         <div className="row">
//                             <section className="3u 6u(medium) 12u$(xsmall) profile">
//                                 <img src="images/profile_placeholder.gif" alt="" />
//                                 <h4>Lorem ipsum</h4>
//                                 <p>Lorem ipsum dolor</p>
//                             </section>
//                             <section className="3u 6u$(medium) 12u$(xsmall) profile">
//                                 <img src="images/profile_placeholder.gif" alt="" />
//                                 <h4>Voluptatem dolores</h4>
//                                 <p>Ullam nihil repudi</p>
//                             </section>
//                             <section className="3u 6u(medium) 12u$(xsmall) profile">
//                                 <img src="images/profile_placeholder.gif" alt="" />
//                                 <h4>Doloremque quo</h4>
//                                 <p>Harum corrupti quia</p>
//                             </section>
//                             <section className="3u$ 6u$(medium) 12u$(xsmall) profile">
//                                 <img src="images/profile_placeholder.gif" alt="" />
//                                 <h4>Voluptatem dicta</h4>
//                                 <p>Et natus sapiente</p>
//                             </section>
//                         </div>
//                     </section>
//                     <footer>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore illum, temporibus veritatis eligendi, aliquam, dolor enim itaque veniam aut eaque sequi qui quia vitae pariatur repudiandae ab dignissimos ex!</p>
//                         <ul className="actions">
//                             <li>
//                                 <a href="#" className="button big">Lorem ipsum dolor sit</a>
//                             </li>
//                         </ul>
//                     </footer>
//                 </div>
//         );
//     }
// });

// var result = React.createElement(rTwo);
// React.render(result,document.getElementById("twoReact"));

var rThree = React.createClass({
    render: function() {
        return(
                <div>
                <div className="container">
                    <header className="major">
                        <h2>Contact</h2>
                        <p>Vous avez des remarques ou des suggestions, contactez-nous !</p>
                    </header>
                </div>
                <div className="container 50%">
                    <form action="#" method="post">
                        <div className="row uniform">
                            <div className="6u 12u$(small)">
                                <input name="name" id="name" value="" placeholder="Nom" type="text"></input>
                            </div>
                            <div className="6u$ 12u$(small)">
                                <input name="email" id="email" value="" placeholder="Email" type="email"></input>
                            </div>
                            <div className="12u$">
                                <textarea name="message" id="message" placeholder="Message" rows="6"></textarea>
                            </div>
                            <div className="12u$">
                                <ul className="actions">
                                    <li><input value="Envoyer" className="special big" type="submit"></input></li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
        );
    }
});

var result = React.createElement(rThree);
React.render(result,document.getElementById("threeReact"));



var rFooter = React.createClass({
    render: function() {
        return(
                // <div class="container">
                //     <section className="links">
                //         <div className="row">
                //             <section className="3u 6u(medium) 12u$(small)">
                //                 <h3>Lorem ipsum dolor</h3>
                //                 <ul className="unstyled">
                //                     <li><a href="#">Lorem ipsum dolor sit</a></li>
                //                     <li><a href="#">Nesciunt itaque, alias possimus</a></li>
                //                     <li><a href="#">Optio rerum beatae autem</a></li>
                //                     <li><a href="#">Nostrum nemo dolorum facilis</a></li>
                //                     <li><a href="#">Quo fugit dolor totam</a></li>
                //                 </ul>
                //             </section>
                //             <section className="3u 6u$(medium) 12u$(small)">
                //                 <h3>Culpa quia, nesciunt</h3>
                //                 <ul className="unstyled">
                //                     <li><a href="#">Lorem ipsum dolor sit</a></li>
                //                     <li><a href="#">Reiciendis dicta laboriosam enim</a></li>
                //                     <li><a href="#">Corporis, non aut rerum</a></li>
                //                     <li><a href="#">Laboriosam nulla voluptas, harum</a></li>
                //                     <li><a href="#">Facere eligendi, inventore dolor</a></li>
                //                 </ul>
                //             </section>
                //             <section className="3u 6u(medium) 12u$(small)">
                //                 <h3>Neque, dolore, facere</h3>
                //                 <ul className="unstyled">
                //                     <li><a href="#">Lorem ipsum dolor sit</a></li>
                //                     <li><a href="#">Distinctio, inventore quidem nesciunt</a></li>
                //                     <li><a href="#">Explicabo inventore itaque autem</a></li>
                //                     <li><a href="#">Aperiam harum, sint quibusdam</a></li>
                //                     <li><a href="#">Labore excepturi assumenda</a></li>
                //                 </ul>
                //             </section>
                //             <section className="3u$ 6u$(medium) 12u$(small)">
                //                 <h3>Illum, tempori, saepe</h3>
                //                 <ul className="unstyled">
                //                     <li><a href="#">Lorem ipsum dolor sit</a></li>
                //                     <li><a href="#">Recusandae, culpa necessita nam</a></li>
                //                     <li><a href="#">Cupiditate, debitis adipisci blandi</a></li>
                //                     <li><a href="#">Tempore nam, enim quia</a></li>
                //                     <li><a href="#">Explicabo molestiae dolor labore</a></li>
                //                 </ul>
                //             </section>
                //         </div>
                //     </section>
                    <div className="row">
                        <div className="8u 12u$(medium)">
                            <ul className="copyright">
                                <li>&copy; Klee Group. All rights reserved.</li>
                                <li>Design: <a href="#">Klee</a></li>
                                <li>Images: <a href="#">Focus</a></li>
                            </ul>
                        </div>
                        <div className="4u$ 12u$(medium)">
                            <ul className="icons">
                                <li>
                                    <a className="icon rounded fa-facebook"><span className="label">Facebook</span></a>
                                </li>
                                <li>
                                    <a className="icon rounded fa-twitter"><span className="label">Twitter</span></a>
                                </li>
                                <li>
                                    <a className="icon rounded fa-google-plus"><span className="label">Google+</span></a>
                                </li>
                                <li>
                                    <a className="icon rounded fa-linkedin"><span className="label">LinkedIn</span></a>
                                </li>
                            </ul>
                        </div>
                //     </div>



        );
    }
});

var result = React.createElement(rFooter);
React.render(result,document.getElementById("footerReact"));


// fermeture de la recuperation du JSON
});


