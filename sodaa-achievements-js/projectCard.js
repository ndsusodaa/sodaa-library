function projectCard(data) {
    return domElemet({
        type: "div",
        attr:{
            className: "project-card"
        },
        children: [
            {
                type: "h5",
                attr: {
                    innerHTML: data.name,
                    style: {
                        lineHeight: "1.2em"
                    }
                }
            },{
                type: "p",
                attr: {
                    innerHTML: `<i>by ${data.author}, ${data.year}</i>`
                }
            },{
                type: "p",
                attr: {
                    innerHTML: getExcerpt(data.description, 200)
                }
            },{
                type: "p",
                attr: {
                    innerHTML: `${data.city}, ${data.state}, ${data.country}`
                }
            },{
                type: "a",
                attr: {
                    innerHTML: "View More",
                    href: '#'
                },
                events: {
                    click: e => {
                        e.preventDefault();
                        showPopup(data);
                    }
                }
            }
        ]
    })
}

function projectDetails(data){
    return domElemet({
        type: "div",
        attr: {
            className: "project-detail-card",
            style: {
                width: "60%",
                minWidth: "560px",
                maxWidth: "720px",
                maxHeight: "720px",
                backgroundColor: "white",
                textAlign: "center",
                padding: "20px",
                marginLeft: "82px",
                overflow: "auto"
            }
        },
        children: [
            {
                type: "div",
                attr: {
                    className: "img-container",
                    style: {
                        height: "40vh",
                        maxHeight: "400px",
                        minHeight: "240px",
                        width: "100%"
                    }
                },
                children: [
                    {
                        type: "img",
                        attr: {
                            className: "project-img",
                            src: data.image,
                            style: {
                                height: "100%"
                            }
                        }
                    }
                ]
            },{
                type: "div",
                attr: {
                    className: "project-detail-body",
                },
                children: [
                    {
                        type: "h5",
                        attr: {
                            innerHTML: data.name
                        }
                    },
                    {
                        type: "p",
                        attr: {
                            innerHTML: `<i>by ${data.author}, ${data.year}</i>`
                        }
                    },
                    {
                        type: "p",
                        attr: {
                            innerHTML: data.description
                        }
                    }
                ]
            }
        ]
    })
}