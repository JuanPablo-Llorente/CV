// Dependencies
import React, {useContext, useEffect, useState} from "react";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import lightStyles from "./LightExperience.module.css";
import darkStyles from "./DarkExperience.module.css";


function Experience()
{
    const {language} = useContext(LanguageContext);
    const {theme} = useContext(ThemeContext);
    
    const [styles, setStyles] = useState(theme === "Light" ? lightStyles : darkStyles);
    
    useEffect(() => {
        if(theme === "Light")
        {
            setStyles(lightStyles);
        }
        else if(theme === "Dark")
        {
            setStyles(darkStyles);
        };
    }, [theme]);
    
    return (
        <div className={styles.Container}>
            <h2 className={styles.Title}>
                {
                    language === "English" ? "EXPERIENCE"
                    :
                    "EXPERIENCIA"
                }
            </h2>
            
            <div className={styles.Job}>
                <h3>
                    {
                        language === "English" ? "Full Stack Web Developer"
                        :
                        "Desarrollador Web Full Stack"
                    }
                </h3>
                
                <div className={styles.Details}>
                    <h4>Henry</h4>
                    <h5>
                        {
                            language === "English" ? "May 2022 - June 2022"
                            :
                            "Mayo 2022 - Junio 2022"
                        }
                    </h5>
                </div>
                
                <p>
                    {
                        language === "English" ? "An digital art e-commerce with a small social network system."
                        :
                        "Un comercio de arte digital con un toque de red social."
                    }
                    <br />
                    {
                        language === "English" ? "Made with six more co-workers as final project."
                        :
                        "Realizado con seis compa??eros m??s, como proyecto final."
                    }
                </p>
            </div>
            
            <div className={styles.Job}>
                <h3>
                    {
                        language === "English" ? "Full Stack Web Developer"
                        :
                        "Desarrollador Web Full Stack"
                    }
                </h3>
                
                <div className={styles.Details}>
                    <h4>Henry</h4>
                    <h5>
                        {
                            language === "English" ? "April 2022 - May 2022"
                            :
                            "Abril 2022 - Mayo 2022"
                        }
                    </h5>
                </div>
                
                <p>
                    {
                        language === "English" ? "A SPA (Single Page Application) of a video games encyclopedia."
                        :
                        "Una aplicaci??n de una sola p??gina sobre una enciclopedia de videojuegos."
                    }
                </p>
            </div>
            
            <div className={styles.Job}>
                <h3>
                    {
                        language === "English" ? "DevOps"
                        :
                        "Desarrollo y Operaciones"
                    }
                </h3>
                
                <div className={styles.Details}>
                    <h4>ABEM</h4>
                    <h5>
                        {
                            language === "English" ? "March 2022 - April 2022"
                            :
                            "Marzo 2022 - Abril 2022"
                        }
                    </h5>
                </div>
                
                <p>
                    {
                        language === "English" ? "Assembly of mining platforms and do their maintenance."
                        :
                        "Armado de rigs de miner??a y mantenimiento de los mismos."
                    }
                </p>
            </div>
            
            <div className={styles.Job}>
                <h3>
                    {
                        language === "English" ? "AutoCAD Draftsman"
                        :
                        "Dibujante de AutoCAD"
                    }
                </h3>
                
                <div className={styles.Details}>
                    <h4>MT Arquitectura</h4>
                    <h5>
                        {
                            language === "English" ? "Sept. 2020 - August 2021"
                            :
                            "Sept. 2020 - Agosto 2021"
                        }
                    </h5>
                </div>
                
                <p>
                    {
                        language === "English" ? "Drawing of municipal plans."
                        :
                        "Dibujado de planos municipales."
                    }
                </p>
            </div>
        </div>
    );
};


export default Experience;