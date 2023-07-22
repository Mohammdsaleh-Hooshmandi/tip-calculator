jQuery.noConflict();
jQuery(($) => {
    const billInput = $("input").filter("[id=bill-input]");
    const numberOfPeopleInput = $("input").filter("[id=number-input]");
    const mainBtn = $("button");

    function calculate() {
        const bill = Number(billInput.val());
        const numberOfPeople = Number(numberOfPeopleInput.val());
        const selectedTip = Number($("form input[id=tip-input]").val() || $("form input:checked").val()) / 100;

        const billPerPerson = bill + bill * selectedTip;
        const tipPerPerson = bill * selectedTip / numberOfPeople;
        return [billPerPerson, tipPerPerson];
    }

    function validateInput (input) {
        if (input.val() <= 0) {
            input.parent().addClass("inValid");
            input.parent().prev().children().last().show();
            return false;
        }
        
        input.parent().removeClass("inValid");
        input.parent().prev().children().last().hide();
        return true;
    }

    billInput.blur(function () { validateInput($(this)) });
    numberOfPeopleInput.blur(function () { validateInput($(this)) });

    $("form").click(() => {
        const selectedTipLabel = $("form label").filter(`[for=${$("form input:checked").attr("id")}]`);
        $("form label").removeClass("active");
        selectedTipLabel.addClass("active");
        
    });

    mainBtn.click(() => {
        const [billPerPerson, tipPerPerson] = calculate();
        
        if (validateInput(billInput) && validateInput(numberOfPeopleInput)) {
            $("h2 span").first().text(tipPerPerson);
            $("h2 span").last().text(billPerPerson);
        }
    });
});