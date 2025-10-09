

// Mobile Navigation Functionality
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
if (mobileMenuToggle) {
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileNavMenu = document.getElementById('mobileNavMenu');
    const mobileNavClose = document.getElementById('mobileNavClose');

    // Toggle mobile menu
    function toggleMobileMenu() {
        mobileMenuToggle.classList.toggle('active');
        mobileNavOverlay.classList.toggle('active');
        mobileNavMenu.classList.toggle('active');
        document.body.style.overflow = mobileNavMenu.classList.contains('active') ? 'hidden' : '';
    }

    // Close mobile menu
    function closeMobileMenu() {
        mobileMenuToggle.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        mobileNavMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event listeners for mobile navigation
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }

    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', closeMobileMenu);
    }

    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', closeMobileMenu);
    }

    // Close mobile menu when clicking on navigation links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close mobile menu on window resize if screen becomes larger
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });

    // Toggle mobile navigation sections
    function toggleMobileSection(header) {
        const section = header.parentElement;
        const links = section.querySelector('.mobile-nav-links');
        const arrow = header.querySelector('i');

        // Toggle active class on header
        header.classList.toggle('active');

        // Toggle active class on links
        links.classList.toggle('active');

        // Rotate arrow if it exists
        if (arrow) {
            if (header.classList.contains('active')) {
                arrow.style.transform = 'rotate(180deg)';
            } else {
                arrow.style.transform = 'rotate(0deg)';
            }
        }
    }

    // Add click event listeners to mobile nav section headers
    const mobileNavHeaders = document.querySelectorAll('.mobile-nav-section h4');
    mobileNavHeaders.forEach(header => {
        header.addEventListener('click', () => {
            toggleMobileSection(header);
        });
    });

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

}

// addition
const donateBox = document.getElementById('donate-bar')
const add_cart_detail = document.getElementById('add-cart-detail')
const add_card_number = document.getElementById('add-card-number')
const add_card_allrupee = document.getElementById('add-card-allrupee')
const add_cart_small = document.getElementById('add-cart-small')
// const cart = document.getElementById('cart')
const cart_div = document.getElementById('cart-div')
let arr = JSON.parse(localStorage.getItem('payment')) || [];
function showcart() {
    if (arr.length == '') {
        add_cart_detail.style.display = 'none'
        cart_div.style.display = 'none'
    } else {
        cart_div.style.display = 'block'
        add_cart_detail.style.display = 'flex'
        add_card_number.innerText = arr.length;
        let all = localStorage.getItem('donation_total')
        add_card_allrupee.innerText = `PKR ${all}`
    }
}
showcart()

add_cart_detail.addEventListener('click', () => {
    donateBox.style.opacity = 1
    donateBox.style.visibility = 'visible'
    donateBox.style.transform = 'translatex(0)'
    donateBox.style.right = 0
    showcarts()
})

cart_div.addEventListener('click', () => {
    donateBox.style.opacity = 1
    donateBox.style.visibility = 'visible'
    donateBox.style.transform = 'translatex(0)'
    donateBox.style.right = 0
    showcarts()
})
add_cart_small.addEventListener('click', () => {
    donateBox.style.opacity = 1
    donateBox.style.visibility = 'visible'
    donateBox.style.transform = 'translatex(0)'
    donateBox.style.right = 0
    showcarts()
})
// addition
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
// const zakat_pay = document.getElementById('zakat-pay')
const all_zakat_show = document.getElementById('all-zakat-show')
const total_2 = document.getElementById('total-2')
const zakat_pay_value = document.getElementById('zakatvalue')
const zakat_pay_value2 = document.getElementById('zakatvalue2')
const zakat_pay_value3 = document.getElementById('zakatvalue3')
const zakat_pay_value4 = document.getElementById('zakatvalue4')


const donate = document.getElementById('donate')
const already_calc_zakat_inp = document.getElementById('already-calc-zakat-inp')
const already_calc_zakat_btn = document.getElementById('already-calc-zakat-btn')

const check_box1 = document.getElementById('check-box1')
const check_box2 = document.getElementById('check-box2')
const check_box3 = document.getElementById('check-box3')
const donate_now = document.getElementById('doante-now')
const donate_now_value = document.getElementById('donate-now-value')
const donateinput = document.getElementById('donate-input')
// const cancel = document.getElementById('cancel')
const donate_1000 = document.getElementById('donate-1000')
const donate_5000 = document.getElementById('donate-5000')
const donate_10000 = document.getElementById('donate-10000')
const quick_donate_responsive = document.getElementById('quick-donate-responsive')
const donate_other = document.getElementById('donate-other')
const donate_input = document.getElementById('donate-input-responsive')
const input_div_box = document.getElementById('input-div-box')
const select_div_box = document.getElementById('select-div-box')
const payment_type = document.getElementById('payment-type')
const donate_type = document.getElementById('donate-type')
const donate_type2 = document.getElementById('donate-type2')
const zakat_title = document.getElementById('zakat-title')
const zakat_description = document.getElementById('zakat-description')

if (donate_now) {
donate_now_value.addEventListener('change', () => {
    if (donate_now_value.value == 'other') {
        select_div_box.innerHTML = `
             <input type="number" step="0.01" placeholder="Enter Amount" id="donate-input">`
    }
})


donate_now.addEventListener('click', () => {

    const donateinput = document.getElementById('donate-input')
    if (donate_now_value.value == 'other') {
        donate2(`PKR ${donateinput.value}`, donate_type.value, payment_type.value)
        return;
    }
    donate2(donate_now_value.value, donate_type.value, payment_type.value)
})
const checkboxes = document.querySelectorAll(".single-check");

checkboxes.forEach((box) => {
    box.addEventListener("change", () => {
        if (box.checked) {
            checkboxes.forEach((other) => {
                if (other !== box) other.checked = false;
            });
        }
    });
});
input_div_box.addEventListener('click', () => {
    donate_other.checked = true
})
// donate_input.addEventListener('click', () => {
//     donate_1000.style.backgroundColor = 
// })


quick_donate_responsive.addEventListener('click', () => {
    // console.log(donate_type2.value);
    // console.log(payment_type.value);
    if (donate_1000.checked) {
        donate2('PKR 1000', donate_type2.value, payment_type.value)
    }
    else if (donate_5000.checked) {
        donate2('PKR 5000', donate_type2.value, payment_type.value)
    }
    else if (donate_10000.checked) {
        donate2('PKR 10000', donate_type2.value, payment_type.value)
    } else {
        donate2(`PKR ${donate_input.value}`, donate_type2.value, payment_type.value)
    }
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
            donate2(`PKR ${already_calc_zakat_inp.value}`, 'ZAKAT', 'YEARLY PAYMENT')
        }
    })

    donate.addEventListener('click', () => {
        if (zakatValue.innerText == 'PKR 0.00') {
            toastr.info("Value is required and can't be empty")
            return;
        } else {
            donate2(zakatValue.innerText, 'ZAKAT', 'YEARLY PAYMENT')
        }
    })
}

const zakat_calc = document.getElementById('zakat-calc')
function updateTotal() {

    let total = 0;
    document.querySelectorAll('.amount').forEach(a => {
        total += parseInt(a.innerHTML.replace(/[^0-9]/g, '')) || 0;
    });
    document.getElementById('all_zakat_show').innerText = `PKR ${total}`;
    localStorage.setItem('donation_total', total);
}
function donate2(abc, donate_type, payment_type) {
    donateBox.style.opacity = 1
    donateBox.style.visibility = 'visible'
    donateBox.style.transform = 'translatex(0)'
    donateBox.style.right = 0
    console.log(arr);
    if (arr.length == 0) {
        const obj = {
            payment_type: payment_type,
            donate_type: donate_type,
            amount: abc,
            quantity: 1
        }
        arr.push(obj)
        localStorage.setItem('payment', JSON.stringify(arr))
        showcart()
        showcarts()
        updateTotal()
        return;
    }
    const exists = arr.some(e => e.donate_type === donate_type);
    // Agar nahi hai to hi push karo
    if (!exists) {
        const obj = {
            payment_type: payment_type,
            donate_type: donate_type,
            amount: abc,
            quantity: 1
        };
        arr.push(obj);
        localStorage.setItem('payment', JSON.stringify(arr));
        showcart();
        showcarts();
        updateTotal();
    } else {
        showcarts(); // agar already exist karta hai to sirf cart refresh kar lo
    }

}
const add_another = document.getElementById('add-another')
add_another.addEventListener('click', () => {
    donateBox.style.opacity = 0
    donateBox.style.visibility = 'hidden'
    donateBox.style.transform = 'translatex(15px)'
    donateBox.style.right = 0
    showcart()
    addcartload()
})



function cancel() {
    donateBox.style.opacity = 0
    donateBox.style.visibility = 'hidden'
    donateBox.style.transform = 'translatex(15px)'
    showcart()
    // addcartload()
}

function add_cart() {
    window.location.href = `add-cart.html`;
}

function showcarts() {
    updateTotal()
    zakat_calc.innerHTML = ``
    // Render donation boxes
    arr.forEach((e, index) => {
        zakat_calc.innerHTML += `
        <div class="zakat-pay" data-index="${index}">
            <div>
                <h3>${e.donate_type}</h3>
                <p>${e.payment_type}</p>
                <div class="counter-box">
                    <div class="minus" data-index="${index}"><i class="ri-subtract-line"></i></div>
                    <div class="counter" data-index="${index}">${e.quantity || 1}</div>
                    <div class="plus" data-index="${index}"><i class="ri-add-line"></i></div>
                </div>
            </div>

            <div>
                <h3 class="amount" data-index="${index}">${e.amount}</h3>
                <p><a href="#" class="remove" data-index="${index}">Remove</a></p>
            </div>
        </div>
    `
    })

    // Select elements
    const plusBtns = document.querySelectorAll('.plus')
    const minusBtns = document.querySelectorAll('.minus')
    const counters = document.querySelectorAll('.counter')
    const amounts = document.querySelectorAll('.amount')
    const removeBtns = document.querySelectorAll('.remove')

    // PLUS
    plusBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            updateTotal()
            let count = Number(counters[i].innerText)
            count++
            counters[i].innerText = count

            const baseAmount = parseInt(arr[i].amount.toString().replace(/[^0-9]/g, '')) / (arr[i].quantity || 1)
            const total = baseAmount * count
            amounts[i].innerText = `PKR ${total}`

            // Update array + localStorage
            arr[i].quantity = count
            arr[i].amount = total
            localStorage.setItem('payment', JSON.stringify(arr))
            // updateTotal()

        })
    })

    // MINUS
    minusBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            updateTotal()
            let count = Number(counters[i].innerText)
            if (count > 1) {
                count--
                counters[i].innerText = count
                const baseAmount = parseInt(arr[i].amount.toString().replace(/[^0-9]/g, '')) / (arr[i].quantity || 1)
                const total = baseAmount * count
                amounts[i].innerText = `PKR ${total}`
                // Update array + localStorage
                arr[i].quantity = count
                arr[i].amount = total
                localStorage.setItem('payment', JSON.stringify(arr))
            }
        })
    })

    // REMOVE
    removeBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            const index = e.target.getAttribute('data-index') || e.target.parentElement.getAttribute('data-index')

            // Remove from array
            arr.splice(index, 1)

            // Save updated array to localStorage
            localStorage.setItem('payment', JSON.stringify(arr))

            // Remove from DOM
            document.querySelector(`.zakat-pay[data-index="${index}"]`).remove()
            updateTotal()
        })
    })
}

function addcartload() {
    const zakat_calc = document.getElementById('zakat-calc2')
    // Render donation boxes
    zakat_calc.innerHTML = ``
    arr.forEach((e, index) => {
        zakat_calc.innerHTML += `
            <div class="zakat-pay" data-index="${index}">
                <div>
                    <h3>${e.donate_type}</h3>
                    <p>${e.payment_type}</p>
                </div>
                <div>
                    <h3 class="amount abc" data-index="${index}">${e.amount}</h3>
                </div>
            </div>
        `
    })
    let get_total = localStorage.getItem('donation_total')
    const info_zakat_show = document.getElementById('total-zakat-show')
    info_zakat_show.innerText = `PKR ${get_total}`
}

if (location.pathname == '/add-cart.html') {
    addcartload()

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