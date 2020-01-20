var planets = document.getElementsByClassName("planet");

$(document).ready(function() {
    $("#nb-mercury").mouseenter(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "mercury" && planets[a].id !== "earth") {
                $("#" + planets[a].id).hide();
            };
        };
    });
    $("#nb-mercury").mouseleave(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "mercury" && planets[a].id !== "earth") {
                $("#" + planets[a].id).show();
            };
        };
    });
    $("#nb-venus").mouseenter(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "venus" && planets[a].id !== "earth") {
                $("#" + planets[a].id).hide();
            };
        };
    });
    $("#nb-venus").mouseleave(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "venus" && planets[a].id !== "earth") {
                $("#" + planets[a].id).show();
            };
        };
    });
    $("#nb-earth").mouseenter(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "earth" && planets[a].id !== "earth") {
                $("#" + planets[a].id).hide();
            };
        };
    });
    $("#nb-earth").mouseleave(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "earth" && planets[a].id !== "earth") {
                $("#" + planets[a].id).show();
            };
        };
    });
    $("#nb-mars").mouseenter(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "mars" && planets[a].id !== "earth") {
                $("#" + planets[a].id).hide();
            };
        };
    });
    $("#nb-mars").mouseleave(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "mars" && planets[a].id !== "earth") {
                $("#" + planets[a].id).show();
            };
        };
    });
    $("#nb-ceres").mouseenter(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "ceres" && planets[a].id !== "earth") {
                $("#" + planets[a].id).hide();
            };
        };
    });
    $("#nb-ceres").mouseleave(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "ceres" && planets[a].id !== "earth") {
                $("#" + planets[a].id).show();
            };
        };
    });
    $("#nb-vesta").mouseenter(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "vesta" && planets[a].id !== "earth") {
                $("#" + planets[a].id).hide();
            };
        };
    });
    $("#nb-vesta").mouseleave(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "vesta" && planets[a].id !== "earth") {
                $("#" + planets[a].id).show();
            };
        };
    });
    $("#nb-jupiter").mouseenter(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "jupiter" && planets[a].id !== "earth") {
                $("#" + planets[a].id).hide();
            };
        };
    });
    $("#nb-jupiter").mouseleave(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "jupiter" && planets[a].id !== "earth") {
                $("#" + planets[a].id).show();
            };
        };
    });
    $("#nb-saturn").mouseenter(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "saturn" && planets[a].id !== "earth" && planets[a].id !== "saturn-ring") {
                $("#" + planets[a].id).hide();
            };
        };
    });
    $("#nb-saturn").mouseleave(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "saturn" && planets[a].id !== "earth" && planets[a].id !== "saturn-ring") {
                $("#" + planets[a].id).show();
            };
        };
    });
    $("#nb-uranus").mouseenter(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "uranus" && planets[a].id !== "earth" && planets[a].id !== "uranus-ring") {
                $("#" + planets[a].id).hide();
            };
        };
    });
    $("#nb-uranus").mouseleave(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "uranus" && planets[a].id !== "earth" && planets[a].id !== "uranus-ring") {
                $("#" + planets[a].id).show();
            };
        };
    });
    $("#nb-neptune").mouseenter(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "neptune" && planets[a].id !== "earth" && planets[a].id !== "neptune-ring") {
                $("#" + planets[a].id).hide();
            };
        };
    });
    $("#nb-neptune").mouseleave(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "neptune" && planets[a].id !== "earth" && planets[a].id !== "neptune-ring") {
                $("#" + planets[a].id).show();
            };
        };
    });
    $("#nb-ikeya").mouseenter(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "ikeya" && planets[a].id !== "earth") {
                $("#" + planets[a].id).hide();
            };
        };
    });
    $("#nb-ikeya").mouseleave(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "ikeya" && planets[a].id !== "earth") {
                $("#" + planets[a].id).show();
            };
        };
    });
    $("#nb-sun").mouseenter(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "sun" && planets[a].id !== "earth") {
                $("#" + planets[a].id).hide();
            };
        };
    });
    $("#nb-sun").mouseleave(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "sun" && planets[a].id !== "earth") {
                $("#" + planets[a].id).show();
            };
        };
    });
    $("#nb-halleys").mouseenter(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "halley" && planets[a].id !== "earth") {
                $("#" + planets[a].id).hide();
            };
        };
    });
    $("#nb-halleys").mouseleave(function() {
        for (a=0;a<planets.length;a++) {
            if (planets[a].id !== "halley" && planets[a].id !== "earth") {
                $("#" + planets[a].id).show();
            };
        };
    });
});