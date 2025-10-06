

// Accordion Functionality
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((acc) => {
    const header = acc.querySelector(".accordion-header");
    const content = acc.querySelector(".accordion-content");

    header.addEventListener("click", () => {
        const openAcc = document.querySelector(".accordion-header.active");
        if (openAcc && openAcc !== header) {
            openAcc.classList.remove("active");
            openAcc.nextElementSibling.style.maxHeight = 0;
        }

        header.classList.toggle("active");
        if (header.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = 0;
        }
    });
});



const second = document.getElementById('second')

const zakat = document.getElementById('zakat')
const envolved = document.getElementById('envolved')
const input = document.getElementById('input')
const input2 = document.getElementById('input2')
const btn = document.getElementById('btn')

const inputOuter = document.getElementById('inputOuter')
const inputOuter1 = document.getElementById('inputOuter1')
const search2 = document.getElementById('search2')
const secimg = document.getElementById('secimg')
// main section
const main = document.getElementById('main')
if (main) {
    document.addEventListener('scroll', () => {
        if (window.scrollY >= 768) {
            secimg.style.zIndex = 0
        }
        if (window.scrollY >= 1110) {
            main.style.position = 'sticky'
        } else {
            main.style.position = 'static'
        }
    })
}
// main section


const zakat2 = document.getElementById('zakat2')
const envolved2 = document.getElementById('involved2')
const infobar2 = document.getElementById('infobar2')
const infobar3 = document.getElementById('infobar3')
document.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        second.style.display = 'flex'
    }
    else {
        second.style.display = 'none'
    }
})



envolved.addEventListener('mouseover', () => {
    infobar3.style.top = '8.5vw'
    infobar3.style.opacity = 1
    infobar3.style.visibility = 'visible'
    infobar3.style.transform = 'translateY(0)'
    infobar2.style.visibility = 'hidden'
    infobar2.style.transform = 'translateY(10)'
    infobar2.style.opacity = 0
})
infobar3.addEventListener('mouseleave', () => {
    infobar3.style.visibility = 'hidden';
    infobar3.style.transform = 'translateY(10px)';
    infobar3.style.opacity = 0;
});

envolved2.addEventListener('mouseover', () => {
    infobar3.style.top = `${window.scrollY + 58}px`
    infobar3.style.opacity = 1
    infobar3.style.visibility = 'visible'
    infobar3.style.transform = 'translateY(0)'
    infobar2.style.visibility = 'hidden'
    infobar2.style.transform = 'translateY(10)'
    infobar2.style.opacity = 0

})
zakat.addEventListener('mouseover', () => {
    infobar2.style.top = '8.5vw'
    infobar2.style.opacity = 1
    infobar2.style.visibility = 'visible'
    infobar2.style.transform = 'translateY(0)'
    infobar3.style.visibility = 'hidden'
    infobar3.style.transform = 'translateY(10)'
    infobar3.style.opacity = 0

})

zakat2.addEventListener('mouseover', () => {
    infobar2.style.top = `${window.scrollY + 56}px`
    infobar2.style.opacity = 1
    infobar2.style.marginLeft = '20vw'
    infobar2.style.visibility = 'visible'
    infobar2.style.transform = 'translateY(0)'
    infobar3.style.visibility = 'hidden'
    infobar3.style.transform = 'translateY(10)'
    infobar3.style.opacity = 0
})
infobar2.addEventListener('mouseleave', () => {
    infobar2.style.visibility = 'hidden'
    infobar2.style.transform = 'translateY(10px)'
    infobar2.style.opacity = 0
})








const calcInput1 = document.getElementById('calc-input1')
const calcInput2 = document.getElementById('calc-input2')
const calcInput3 = document.getElementById('calc-input3')
const calcInput4 = document.getElementById('calc-input4')
const calcInput5 = document.getElementById('calc-input5')
const calcInput6 = document.getElementById('calc-input6')
const calcInput7 = document.getElementById('calc-input7')
const calcInput8 = document.getElementById('calc-input8')
const calcInput9 = document.getElementById('calc-input9')
const showcalc = document.getElementById('all-calc')
const zakatValue = document.getElementById('zakat-value')
const reset = document.getElementById('reset')
const donateBox = document.getElementById('donate-bar')
const zakat_pay = document.getElementById('zakat-pay')
const all_zakat_show = document.getElementById('all-zakat-show')
const total_2 = document.getElementById('total-2')
const zakat_pay_value = document.getElementById('zakatvalue')
const zakat_pay_value2 = document.getElementById('zakatvalue2')
const zakat_pay_value3 = document.getElementById('zakatvalue3')
const zakat_pay_value4 = document.getElementById('zakatvalue4')


const donate = document.getElementById('donate')
const already_calc_zakat_inp = document.getElementById('already-calc-zakat-inp')
const already_calc_zakat_btn = document.getElementById('already-calc-zakat-btn')
const plus = document.getElementById('plus')
const counter = document.getElementById('counter')
const check_box1 = document.getElementById('check-box1')
const check_box2 = document.getElementById('check-box2')
const check_box3 = document.getElementById('check-box3')
const donate_now = document.getElementById('doante-now')
const donate_now_value = document.getElementById('donate-now-value')
const donateinput = document.getElementById('donate-input')
const cancel = document.getElementById('cancel')
if (donate_now) {
    donate_now_value.addEventListener('change', () => {
        // alert('adssa')
        if (donate_now_value.value == 'other') {
            donateinput.style.display = 'block'
            return;
        } else {
            donateinput.style.display = 'none'
        }
    })

    donate_now.addEventListener('click', () => {
        if (donate_now_value.value == 'other') {
            donate2(`PKR ${donateinput.value}`)
            return;
        }
        donate2(donate_now_value.value)
    })

}






if (reset) {

    reset.addEventListener('click', () => {
        showcalc.innerText = 'PKR 0.00'
        zakatValue.innerText = 'PKR 0.00'
        calcInput1.value = ``
        calcInput2.value = ``
        calcInput3.value = ``
        calcInput4.value = ``
        calcInput5.value = ``
        calcInput6.value = ``
        calcInput7.value = ``
        calcInput8.value = ``
        calcInput9.value = ``
    })

    calcInput1.addEventListener('input', () => {
        showcalc.innerText = ``
        showcalc.innerText = `PKRN ${Number(calcInput1.value)
            + Number(calcInput2.value) + Number(calcInput3.value)
            + Number(calcInput4.value) + Number(calcInput4.value)
            + Number(calcInput5.value) + Number(calcInput6.value)
            - Number(calcInput7.value) - Number(calcInput8.value)
            - Number(calcInput9.value)}.00`;


        let percentage = showcalc.innerText.slice(3) * 0.025;
        if (showcalc.innerText.slice(3) >= 350.00) {
            zakatValue.innerText = `PKR ${Math.floor(percentage)}`
        } else {
            zakatValue.innerText = `PKR 0.00`
        }
    })

    calcInput2.addEventListener('input', () => {
        showcalc.innerText = ``
        showcalc.innerText = `PKR ${Number(calcInput1.value)
            + Number(calcInput2.value)
            + Number(calcInput3.value)
            + Number(calcInput4.value)
            + Number(calcInput4.value)
            + Number(calcInput5.value)
            + Number(calcInput6.value)
            - Number(calcInput7.value)
            - Number(calcInput8.value)
            - Number(calcInput9.value)}.00`
        let percentage = showcalc.innerText.slice(3) * 0.025;
        if (showcalc.innerText.slice(3) >= 350.00) {
            zakatValue.innerText = `PKR ${Math.floor(percentage)}`
        } else {
            zakatValue.innerText = `PKR 0.00`
        }
    })

    calcInput3.addEventListener('input', () => {
        showcalc.innerText = ``
        showcalc.innerText = `PKR ${Number(calcInput1.value)
            + Number(calcInput2.value)
            + Number(calcInput3.value)
            + Number(calcInput4.value)
            + Number(calcInput4.value)
            + Number(calcInput5.value)
            + Number(calcInput6.value)
            - Number(calcInput7.value)
            - Number(calcInput8.value)
            - Number(calcInput9.value)}.00`
        let percentage = showcalc.innerText.slice(3) * 0.025;
        if (showcalc.innerText.slice(3) >= 350.00) {
            zakatValue.innerText = `PKR ${Math.floor(percentage)}`
        } else {
            zakatValue.innerText = `PKR 0.00`
        }
    })

    calcInput4.addEventListener('input', () => {
        showcalc.innerText = ``
        showcalc.innerText = `PKR ${Number(calcInput1.value)
            + Number(calcInput2.value)
            + Number(calcInput3.value)
            + Number(calcInput4.value)
            + Number(calcInput4.value)
            + Number(calcInput5.value)
            + Number(calcInput6.value)
            - Number(calcInput7.value)
            - Number(calcInput8.value)
            - Number(calcInput9.value)}.00`
        let percentage = showcalc.innerText.slice(3) * 0.025;
        if (showcalc.innerText.slice(3) >= 350) {
            console.log(percentage);

            zakatValue.innerText = `PKR ${Math.floor(percentage)}`
        } else {
            zakatValue.innerText = `PKR 0.00`
        }
    })

    calcInput5.addEventListener('input', () => {
        showcalc.innerText = ``
        showcalc.innerText = `PKR ${Number(calcInput1.value)
            + Number(calcInput2.value)
            + Number(calcInput3.value)
            + Number(calcInput4.value)
            + Number(calcInput4.value)
            + Number(calcInput5.value)
            + Number(calcInput6.value)
            - Number(calcInput7.value)
            - Number(calcInput8.value)
            - Number(calcInput9.value)}.00`
        let percentage = showcalc.innerText.slice(3) * 0.025;
        if (showcalc.innerText.slice(3) >= 350.00) {
            zakatValue.innerText = `PKR ${Math.floor(percentage)}`
        }
        else {
            zakatValue.innerText = `PKR 0.00`
        }
    })

    calcInput6.addEventListener('input', () => {
        showcalc.innerText = ``
        showcalc.innerText = `PKR ${Number(calcInput1.value)
            + Number(calcInput2.value)
            + Number(calcInput3.value)
            + Number(calcInput4.value)
            + Number(calcInput4.value)
            + Number(calcInput5.value)
            + Number(calcInput6.value)
            - Number(calcInput7.value)
            - Number(calcInput8.value)
            - Number(calcInput9.value)}.00`
        let percentage = showcalc.innerText.slice(3) * 0.025;
        if (showcalc.innerText.slice(3) >= 350.00) {
            zakatValue.innerText = `PKR ${Math.floor(percentage)}`
        }
        else {
            zakatValue.innerText = `PKR 0.00`
        }
    })

    calcInput7.addEventListener('input', () => {
        showcalc.innerText = ``
        showcalc.innerText = `PKR ${Number(calcInput1.value)
            + Number(calcInput2.value)
            + Number(calcInput3.value)
            + Number(calcInput4.value)
            + Number(calcInput4.value)
            + Number(calcInput5.value)
            + Number(calcInput6.value)
            - Number(calcInput7.value)
            - Number(calcInput8.value)
            - Number(calcInput9.value)}.00`
        let percentage = showcalc.innerText.slice(3) * 0.025;
        if (showcalc.innerText.slice(3) >= 350.00) {
            zakatValue.innerText = `PKR ${Math.floor(percentage)}`
        }
        else {
            zakatValue.innerText = `PKR 0.00`
        }
    })

    calcInput8.addEventListener('input', () => {
        showcalc.innerText = ``
        showcalc.innerText = `PKR ${Number(calcInput1.value)
            + Number(calcInput2.value)
            + Number(calcInput3.value)
            + Number(calcInput4.value)
            + Number(calcInput4.value)
            + Number(calcInput5.value)
            + Number(calcInput6.value)
            - Number(calcInput7.value)
            - Number(calcInput8.value)
            - Number(calcInput9.value)}.00`
        let percentage = showcalc.innerText.slice(3) * 0.025;
        if (showcalc.innerText.slice(3) >= 350.00) {
            zakatValue.innerText = `PKR ${Math.floor(percentage)}`
        }
        else {
            zakatValue.innerText = `PKR 0.00`
        }
    })

    calcInput9.addEventListener('input', () => {
        showcalc.innerText = ``
        showcalc.innerText = `PKR ${Number(calcInput1.value)
            + Number(calcInput2.value)
            + Number(calcInput3.value)
            + Number(calcInput4.value)
            + Number(calcInput4.value)
            + Number(calcInput5.value)
            + Number(calcInput6.value)
            - Number(calcInput7.value)
            - Number(calcInput8.value)
            - Number(calcInput9.value)}.00`
        let percentage = showcalc.innerText.slice(3) * 0.025;
        if (showcalc.innerText.slice(3) >= 350.00) {
            zakatValue.innerText = `PKR ${Math.floor(percentage)}`
        }
        else {
            zakatValue.innerText = `PKR 0.00`
        }
    })

    already_calc_zakat_btn.addEventListener('click', () => {
        if (already_calc_zakat_inp.value == '') {
            toastr.info("Value is required and can't be empty")
            return;
        } else {
            donate2(`PKR ${already_calc_zakat_inp.value}`)
        }
    })

    donate.addEventListener('click', () => {
        if (zakatValue.innerText == 'PKR 0.00') {
            toastr.info("Value is required and can't be empty")
            return;
        } else {
            donate2(zakatValue.innerText)
        }
    })
}


function donate2(abc) {

    all_zakat_show.innerText = abc
    total_2.innerText = abc
    donateBox.style.opacity = 1
    donateBox.style.visibility = 'visible'
    donateBox.style.transform = 'translatex(0)'
    donateBox.style.right = 0
    zakat_pay.style.display = 'flex'
    zakat_pay_value.innerText = abc

    let count = 1

    plus.addEventListener('click', () => {
        count++
        counter.innerText = count
        zakat_pay_value.innerText = `PKR ${Number(abc.slice(3) * count)}`
        all_zakat_show.innerText = total_2.innerText = `PKR ${Number(zakat_pay_value.innerText.slice(3))}`
    })

    const minus = document.getElementById('minus')
    minus.addEventListener('click', () => {
        if (count <= 0) {
            all_zakat_show.innerText = total_2.innerText = zakat_pay_value.innerText
        } else {
            count--
            counter.innerText = count;
            // console.log(zakat_pay_value.innerText.slice(4));
            zakat_pay_value.innerText = `PKR ${Number(abc.slice(3) * count)}`
            all_zakat_show.innerText = total_2.innerText = zakat_pay_value.innerText
        }
    })


    const add_another = document.getElementById('add-another')
    const checkout = document.getElementById('checkout')
    const donateBox2 = document.getElementById('donate-bar2')

    add_another.addEventListener('click', () => {
        donateBox.style.opacity = 0
        donateBox.style.visibility = 'hidden'
        donateBox.style.transform = 'translatex(15px)'
        donateBox.style.right = 0
        donateBox2.style.opacity = 0
        donateBox2.style.visibility = 'hidden'
        donateBox2.style.transform = 'translatex(15px)'
        donateBox2.style.right = 0
    })
    checkout.addEventListener('click', () => {
        donateBox2.style.opacity = 1
        donateBox2.style.visibility = 'visible'
        donateBox2.style.transform = 'translatex(0px)'
        donateBox.style.right = '29.5%'
    })







    cancel.addEventListener('click', () => {
        donateBox.style.opacity = 0
        donateBox.style.visibility = 'hidden'
        donateBox.style.transform = 'translatex(15px)'
        donateBox2.style.opacity = 0
        donateBox2.style.visibility = 'hidden'
        donateBox2.style.transform = 'translatex(15px)'
    })

}

function add_cart() {
    localStorage.setItem('total', all_zakat_show.innerText)
    window.location.href = `add-cart.html`;
}
function remove() {
    all_zakat_show.innerText = total_2.innerText = `RS:${Number(all_zakat_show.innerText.slice(3) - zakat_pay_value.innerText.slice(3))}`
    zakat_pay.style.display = 'none'
}







if (location.pathname == '/add-cart.html') {
    let get_total = localStorage.getItem('total')
    const info_zakat_show = document.getElementById('info-zakat-show')
    info_zakat_show.innerText = get_total
    const total_zakat_show = document.getElementById('total-zakat-show')
    total_zakat_show.innerText = get_total







    const select = document.getElementById('select')
    const select2 = document.getElementById('select2')
    const countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czechia",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Korea",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Korea",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City",
        "Venezuela",
        "Viet Nam",
        "Yemen",
        "Zambia",
        "Zimbabwe"
    ];
    countries.forEach((e) => {
        select.innerHTML += `
    <option value="" selected>${e}</option>`
    })

    let option = [
        'Mishary Event',
        'TV',
        'Radio',
        'Email',
        'Social Media',
        'Events',
        'Post',
        'Google/Internet',
        'Islamic Channel',
        'Mosque',
        'Regular Donor',
        'Other'
    ]
    option.forEach((e) => {
        select2.innerHTML += `
<option value="" selected>${e}</option>`
    })


}