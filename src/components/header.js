import React, { Component } from 'react'
import seachicon from "../icon-search.png";

export default class header extends Component {
    render() {
        return (
            <div className="wrapper">
				<div className="hide"> <a href="#maincontent">Skip to Main Content</a> </div>
				<a name="top"></a>
				<div className="row top-header" role="banner">
					  <div className="large-6 columns"> <a className="left" href="https://www.dol.gov/"> <span className="brand"></span>
						<h1 className="header-logo-type">U.S. DEPARTMENT OF LABOR </h1>
						</a> </div>
					  <div className="large-2 columns">
					  <div id="shares" className="header-buttons-wrapper hide-for-small"  style={{margin: "10px"}}>
						 <div className="btn-group" >
							<button type="button" className="btn engage-btn dropdown-toggle btn-md" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							   <div>
								  <div  className="glyphicon glyphicon-plus"></div>
							   </div>
							   Engage
							</button>
							<ul className="dropdown-menu">
							   <li>
								  <a href="https://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://www.facebook.com/departmentoflabor&exitTitle=www.Facebook.com&fedpage=no">
								  <img alt="" src="https://www.dol.gov/homepage/img/icons/facebook.png" />
								  Facebook
								  </a>
							   </li>
							   <li>
								  <div className="twitter-icon"></div>
								  <a href="https://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://twitter.com/usdol&exitTitle=www.Twitter.com&fedpage=no">
								  <img alt="" src="https://www.dol.gov/homepage/img/icons/twitter.png" />
								  Twitter
								  </a>
							   </li>
							   <li>
								  <a href="https://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://www.instagram.com/USDOL&exitTitle=www.instagram.com/USDOL&fedpage=no">
								  <img alt="" src="https://www.dol.gov/homepage/img/icons/instagram.png" />&nbsp;Instagram
								  </a>
							   </li>
							   <li>
								  <a href="/rss">
								  <img alt="" src="https://www.dol.gov/homepage/img/icons/rss.png" />
								  RSS
								  </a>
							   </li>
							   <li>
								  <a href="javascript:window.open('https://public.govdelivery.com/accounts/USDOL/subscriber/new','Popup','width=800,height=500,toolbar=no,scrollbars=yes,resizable=yes'); void('');" onclick="window.status='Subscribe'; return true" onmouseover="window.status='Subscribe'; return true" onmouseout="window.status=''; return true">
								  <img alt="" src="https://www.dol.gov/homepage/img/icons/email.png" />
								  Email</a>
							   </li>
							</ul>
						 </div>
						 <div className="btn-group" style={{marginLeft: "-4px"}}>
							<a className="btn share-btn btn-md" role="button" href="https://www.addthis.com/bookmark.php?source=tbx32nj-1.0&v=300&url=http%3A%2F%2Fwww.dol.gov&pubid=usdol&ct=1&title=United%20States%20Department%20of%20Labor&pco=tbxnj-1.0">
							   <div  >
								  <div className="glyphicon glyphicon-share"  ></div>
							   </div>
							   Share
							</a>
						 </div>
					  </div>
					  </div>
					  <div className="large-4 columns">
						<div id="searchbox">
					  <form accept-charset="UTF-8" action="https://search.usa.gov/search" id="search_form" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
						<div className="small-10 columns">
						  <label for="query" className="scrn-rdr">Search</label>
						  <input type="search" name="query" id="query" placeholder="Find it in DOL" required="required" />
						</div>
						<div className="small-2 columns">
						  <input type="hidden" name="affiliate" value="u.s.departmentoflabor" />
						  <input type="image"  src={seachicon}  alt="Search" className="usagov-submit" />
						</div>
					  </form>
					</div>
					  </div>
					</div>
				  <a name="top"></a>
				  {/* <ul>
				   <li><Link to="">Home</Link></li>       
				   <li><Link to="/about">About</Link></li>       
				   <li><Link to="/contact">Contact</Link></li>       
				  </ul>  
				  */ }
            </div>
        )
    }
}