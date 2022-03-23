import Styles from "./homepage.module.css"

function Homepage(){
    return (
        <div
          className={Styles.homepage_main_wrapper}
          data-testid="homepage_main_wrapper"
        >
          <div className={Styles.homepage_main} data-testid="homepage_main">
            {/* <div
              className={Styles.homepage_navbarHolder}
              data-testid="homepage_navbarHolder"
            >
             
            </div> */}

            <div
              className={Styles.homepage_contentHolder}
              data-testid="homepage_contentHolder"
            >
              <div
                className={Styles.homepage_triangleHolder}
                data-testid="homepage_triangleHolder"
              >
                {/* <h1>triangle</h1> */}
              </div>

              <div
                className={Styles.homepage_textHolder}
                data-testid="homepage_textHolder"
              >
                {/* <h1>textholder</h1> */}
              </div>

              <div
                className={Styles.homepage_paginationHolder}
                data-testid="homepage_paginationHolder"
              >
                {/* <h1>pa</h1> */}
              </div>
            </div>
          </div>
        </div>
     
    );
}

export default Homepage;