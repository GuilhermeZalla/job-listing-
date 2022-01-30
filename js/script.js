const elements = {
    article: document.querySelectorAll("article"),
    li: document.querySelectorAll("li"),
    ul: document.getElementById("filter-list")
}

function removeFrontend() {
    let role;
    let hasRole;
    for (let i = 0; i < elements.article.length; ++i) {
        role = elements.article[i].getAttribute("data-role");
        if (role === "frontend") {
            elements.article[i].style.display = 'none';
        }
    }
    for (let i = 0; i < elements.li.length; ++i) {
        hasRole = elements.li[i].getAttribute("data-role");
        if (hasRole === "frontend") {
            elements.li[i].style.display = 'none';
        }
    }
}

function removeBackend() {
    let role;
    let hasRole;
    for (let i = 0; i < elements.article.length; ++i) {
        role = elements.article[i].getAttribute("data-role");
        if (role === "backend") {
            elements.article[i].style.display = 'none';
        }
    }
    for (let i = 0; i < elements.li.length; ++i) {
        hasRole = elements.li[i].getAttribute("data-role");
        if (hasRole === "backend") {
            elements.li[i].style.display = 'none';
        }
    }
}

function removeFullstack() {
    let role;
    let hasRole;
    for (let i = 0; i < elements.article.length; ++i) {
        role = elements.article[i].getAttribute("data-role");
        if (role === "fullstack") {
            elements.article[i].style.display = 'none';
        }
    }
    for (let i = 0; i < elements.li.length; ++i) {
        hasRole = elements.li[i].getAttribute("data-role");
        if (hasRole === "fullstack") {
            elements.li[i].style.display = 'none';
        }
    }
}

function removeJunior() {
    let level;
    let hasLevel;
    for (let i = 0; i < elements.article.length; ++i) {
        level = elements.article[i].getAttribute("data-level");
        if (level === "junior") {
            elements.article[i].style.display = 'none';
        }
    }
    for (let i = 0; i < elements.li.length; ++i) {
        hasLevel = elements.li[i].getAttribute("data-level");
        if (hasLevel === "junior") {
            elements.li[i].style.display = 'none';
        }
    }
}

function removeSenior() {
    let level;
    let hasLevel;
    for (let i = 0; i < elements.article.length; ++i) {
        level = elements.article[i].getAttribute("data-level");
        if (level === "senior") {
            elements.article[i].style.display = 'none';
        }
    }
    for (let i = 0; i < elements.li.length; ++i) {
        hasLevel = elements.li[i].getAttribute("data-level");
        if (hasLevel === "senior") {
            elements.li[i].style.display = 'none';
        }
    }
}

function removeMidweight() {
    let level;
    let hasLevel;
    for (let i = 0; i < elements.article.length; ++i) {
        level = elements.article[i].getAttribute("data-level");
        if (level === "midweight") {
            elements.article[i].style.display = 'none';
        }
    }
    for (let i = 0; i < elements.li.length; ++i) {
        hasLevel = elements.li[i].getAttribute("data-level");
        if (hasLevel === "midweight") {
            elements.li[i].style.display = 'none';
        }
    }
}

function removePython() {
    let language;
    let hasLanguage;
    for (let i = 0; i < elements.article.length; ++i) {
        language = elements.article[i].getAttribute("data-language");
        if (language === "python") {
            elements.article[i].style.display = 'none';
        }
    }
    for (let i = 0; i < elements.li.length; ++i) {
        hasLanguage = elements.li[i].getAttribute("data-language");
        if (hasLanguage === "python") {
            elements.li[i].style.display = 'none';
        }
    }
}

function removeRuby() {
    let language;
    let hasLanguage;
    for (let i = 0; i < elements.article.length; ++i) {
        language = elements.article[i].getAttribute("data-language");
        if (language === "ruby") {
            elements.article[i].style.display = 'none';
        }
    }
    for (let i = 0; i < elements.li.length; ++i) {
        hasLanguage = elements.li[i].getAttribute("data-language");
        if (hasLanguage === "ruby") {
            elements.li[i].style.display = 'none';
        }
    }
}

function removeJavascript() {
    let language;
    let hasLanguage;
    for (let i = 0; i < elements.article.length; ++i) {
        language = elements.article[i].getAttribute("data-language");
        if (language === "javascript") {
            elements.article[i].style.display = 'none';
        }
    }
    for (let i = 0; i < elements.li.length; ++i) {
        hasLanguage = elements.li[i].getAttribute("data-language");
        if (hasLanguage === "javascript") {
            elements.li[i].style.display = 'none';
        }
    }
}

function removeHTML() {
    let language;
    let hasLanguage;
    for (let i = 0; i < elements.article.length; ++i) {
        language = elements.article[i].getAttribute("data-language");
        if (language === "html") {
            elements.article[i].style.display = 'none';
        }
    }
    for (let i = 0; i < elements.li.length; ++i) {
        hasLanguage = elements.li[i].getAttribute("data-language");
        if (hasLanguage === "html") {
            elements.li[i].style.display = 'none';
        }
    }
}

function removeCSS() {
    let language;
    let hasLanguage;
    for (let i = 0; i < elements.article.length; ++i) {
        language = elements.article[i].getAttribute("data-language");
        if (language === "css") {
            elements.article[i].style.display = 'none';
        }
    }
    for (let i = 0; i < elements.li.length; ++i) {
        hasLanguage = elements.li[i].getAttribute("data-language");
        if (hasLanguage === "css") {
            elements.li[i].style.display = 'none';
        }
    }
}

function removeReact() {
    let tool;
    let hasTool;
    for (let i = 0; i < elements.article.length; ++i) {
        tool = elements.article[i].getAttribute("data-tool");
        if (tool === "react") {
            elements.article[i].style.display = 'none';
        }
    }
    for (let i = 0; i < elements.li.length; ++i) {
        hasTool = elements.li[i].getAttribute("data-tool");
        if (hasTool === "react") {
            elements.li[i].style.display = 'none';
        }
    }
}

function removeSass() {
    let tool;
    let hasTool;
    for (let i = 0; i < elements.article.length; ++i) {
        tool = elements.article[i].getAttribute("data-tool");
        if (tool === "sass") {
            elements.article[i].style.display = 'none';
        }
    }
    for (let i = 0; i < elements.li.length; ++i) {
        hasTool = elements.li[i].getAttribute("data-tool");
        if (hasTool === "sass") {
            elements.li[i].style.display = 'none';
        }
    }
}

function removeVue() {
    let tool;
    let hasTool;
    for (let i = 0; i < elements.article.length; ++i) {
        tool = elements.article[i].getAttribute("data-tool");
        if (tool === "vue") {
            elements.article[i].style.display = 'none';
        }
    }
    for (let i = 0; i < elements.li.length; ++i) {
        hasTool = elements.li[i].getAttribute("data-tool");
        if (hasTool === "vue") {
            elements.li[i].style.display = 'none';
        }
    }
}

function removeDjango() {
    let tool;
    let hasTool;
    for (let i = 0; i < elements.article.length; ++i) {
        tool = elements.article[i].getAttribute("data-tool");
        if (tool === "django") {
            elements.article[i].style.display = 'none';
        }
    }
    for (let i = 0; i < elements.li.length; ++i) {
        hasTool = elements.li[i].getAttribute("data-tool");
        if (hasTool === "django") {
            elements.li[i].style.display = 'none';
        }
    }
}

function removeRor() {
    let tool;
    let hasTool;
    for (let i = 0; i < elements.article.length; ++i) {
        tool = elements.article[i].getAttribute("data-tool");
        if (tool === "ror") {
            elements.article[i].style.display = 'none';
        }
    }
    for (let i = 0; i < elements.li.length; ++i) {
        hasTool = elements.li[i].getAttribute("data-tool");
        if (hasTool === "ror") {
            elements.li[i].style.display = 'none';
        }
    }
}

function clearFilter() {
    let filter = elements.ul.querySelectorAll("li");
    for (let i = 0; i < elements.article.length; ++i) {
        if (window.matchMedia("(max-width: 800px)").matches) {
            elements.article[i].style.display = 'block';
        } else {
            elements.article[i].style.display = 'flex';
        }
    }

    for (let i = 0; i < elements.li.length; ++i) {
        filter[i].style.display = 'inline-block';
    }
}
