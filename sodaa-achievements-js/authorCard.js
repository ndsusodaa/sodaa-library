function authorHeader(data){ 
    return domElemet({
        type: "div",
        attr: {
            style: {
                width: "100%",
                maxWidth: "720px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "40px",
                marginBottom: "40px"
            }
            
        },
        children: [
            {
                type: "div",
                attr: {
                    className: "author-avatar",
                    style: {
                        backgroundImage: `url(${data.image})`,
                        height: "180px",
                        width: "180px",
                        borderRadius: "50%",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }
                }
            },
            {
                type: "h2",
                attr: {
                    innerHTML: data.fname + " " + data.lname,
                    className: "author-name",
                    style: {
                        marginTop: "24px",
                        marginBottom: "0",
                        lineHeight: "1em",
                    }
                }
            },
            {
                type: "p",
                attr: {
                    innerHTML: data.department,
                    style: {
                        marginTop: "0",
                        marginBottom: "18px",
                        fontSize: "1.2em",
                        color: "#2EA279",
                    }
                }
            },
            {
                type: "p",
                attr: {
                    innerHTML: data.about
                }
            }
        ]
    })

}

function authorListItem(data){
    if (typeof(domElemet) === "undefined") {
        throw "You must import domUtil.js to you html file before this module!"
    } else {
        return domElemet({
            type: "div",
            attr: {
                className: "author-card",
                style: {
                    display: "block",
                    maxWidth: "360px",
                    padding: "16px",
                    paddingTop: "30px",
                    paddingBottom: "30px",
                    textAlign: "center"
                }
            },
            children: [
                {
                    type: "div",
                    attr: {
                        className: "author-avatar",
                        style: {
                            backgroundImage: `url(${data.image})`,
                            height: "90px",
                            width: "90px",
                            borderRadius: "50%",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            marginLeft: "auto",
                            marginRight: "auto"
                        }
                    }
                },{
                    type: "a",
                    attr: {
                        className: "author-link",
                        innerHTML: data.fname + " " + data.lname,
                        href: "https://sodaa360.com/achievements/faculty/faculty-page/?uid=" + data.uid,
                        style: {
                            display: "block",
                            textDecoration: "none",
                            marginTop: "8px",
                            fontSize: "1.3em",
                            color: "black"
                        }
                    }
                },{
                    type: "p",
                    attr: {
                        innerHTML: data.department,
                        style: {
                            display: "block",
                            marginTop: "8px",
                            color: "#2ea279"
                        }
                    }
                }
            ]
        });
    }
}