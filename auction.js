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


        		<div>


        		<form method="post" action="" onsubmit="return validate_form(this)">
                <div className="container">
                    <header className="major">
                        <h2>Faites vos enchères !</h2>
                        <p>Et que le meilleur gagne ...</p>
                    </header>
                    <div className="row 170%">
                        <div className="4u 12u$(small)" >
                            <section className="box">
                                <img src="images/fauteuil.jpg" alt="Fauteuil" className="image"></img>
                                <h3>Chaise Platinium</h3>
                                <p><input type="text" name="fauteuil1"id="fauteuil1" placeholder="       Indiquez ici votre prix, ex : 1 000 KP" /></p>
                            </section>
                        </div>
                        <div className="4u 12u$(medium)">
                            <section className="box">
                                <img src="images/fauteuil2.jpg" alt="Fauteuil" width="250px" height="200px" className="image"></img>
                                <h3>Chaise Gold</h3>
                                <p><input type="text" name="fauteuil2" id="fauteuil2"  placeholder="       Indiquez ici votre prix, ex : 1 000 KP" /></p>
                            </section>
                        </div>
                        <div className="4u$ 12u$(big)">
                            <section className="box">
                                <img src="images/tablette.jpg" alt="tablette"  width="250px" height="200px" className="image"></img>
                                <h3>Tablette Android</h3>
                                <p><input type="text" name="tablette" id="tablette" placeholder="       Indiquez ici votre prix, ex : 1 000 KP" /></p>
                            </section>
                        </div>

                    </div>
                </div>
                <div class="20u$">
					<ul class="actions">
						<input type="submit" name ="val" value="Valider" class="special" />

					</ul>
				</div>
                </form>
                </div>
        );
    }
});
// chercher des photos pour status = false

var result = React.createElement(rAuction, {ouvert: true});
React.render(result,document.getElementById("auction"));
