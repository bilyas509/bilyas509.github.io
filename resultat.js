// relier au serveur et mettre status directement dans le renderElement
var status = false;

var rAuction = React.createClass({

    render: function() {

    	var styles = {
            title: {
                fontSize: 26,
                margin: 0,
                marginBottom: 60
            },
            hidden: {
                display: 'none',
            },
            visible: {
                display: 'block',
            }
        };

        return(


        	 < div>
        		<form method="" action="">
                <div className="container">
                    <header className="major">
                        <h2>Voici les gagnants du mois !</h2>
                        <p>Félicitations !</p>
                    </header>
                    <div className="row 170%">
                        <div className="4u 12u$(small)" >
                            <section className="box">
                                <a href="fauteuil1.html"><img src="images/fauteuil.jpg" alt="Fauteuil" className="image"></img></a>
                                <h3>Chaise Platinium</h3>
                            </section>
                        </div>
                        <div className="4u 12u$(medium)">
                            <section className="box">
                                <a href="fauteuil2.html"><img src="images/fauteuil2.jpg" alt="Fauteuil" width="250px" height="200px" className="image"></img></a>
                                <h3>Chaise Gold</h3>
                            </section>
                        </div>
                        <div className="4u$ 12u$(big)">
                            <section className="box">
                                <a href="tablette.html"><img src="images/tablette.jpg" alt="tablette"  width="250px" height="200px" className="image"></img></a>
                                <h3>Tablette Android</h3>
                            </section>
                        </div>

                    </div>
                </div>
                </form>
                </div>
        );
    }
});
// chercher des photos pour status = false

var result = React.createElement(rAuction, {ouvert: true});
React.render(result,document.getElementById("auction"));
