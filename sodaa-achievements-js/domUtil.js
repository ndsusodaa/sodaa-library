const domElemet = (node) => {

    const ele = document.createElement(node.type);

    for (key in node.attr) {
        if (key.substring(0, 5) === "data_") {
            ele.dataset[key.substring(5)] = node.attr[key]
        } else if (key === "style" && typeof (node.attr[key]) !== "string") {
            for (styleName in node.attr[key]) {
                ele[key][styleName] = node.attr[key][styleName]
            }
        } else {
            ele[key] = node.attr[key];
        }
    }

    if (node.events) {
        for (key in node.events) {
            ele.addEventListener(key, node.events[key]);
        }
    }


    if (node.children) {

        node.children.forEach(child => {
            const childEle = domElemet(child);
            ele.append(childEle)
        });
    }

    return ele;
}


function showPopup(data) {
    console.log(data);

    const popupContainer = domElemet({
        type: "div",
        attr: {
            style: {
                position: "fixed",
                display: "flex",
                justifyContent: "center",
                top: "0",
                bottom: "0",
                left: "0",
                width: "100%",
                zIndex: "1001",
                backgroundColor: "rgba(0,0,0,0.5)",
                paddingTop: "20px",
                padding: "20px"
            }
        }
    });

    const btnClose = document.createElement("button");
    btnClose.style = `margin-left:32px; background:none; font-size:1.2em; font-weight:300`;
    btnClose.innerHTML = "Close";
    btnClose.addEventListener("click", e => {
        popupContainer.remove();
    });

    popupContainer.append(projectDetails(data), btnClose);

    document.querySelector("body").prepend(popupContainer);
}