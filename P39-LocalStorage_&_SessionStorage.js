/*
Q. What is localStorage & sessionStorage ?

Ans-LocalStorage:  A browser feature allowing websites to store larger
    amounts of data locally, which remains available even after closing the 
    browser. It's useful for things like user preferences and offline data.
    However, it's not secure for sensitive info. */


    localStorage.setItem('username', 'juned');
    console.log(localStorage.getItem('username'));


    

 /* SessionStorage: Another browser feature for storing data, but this data only lasts
    as long as the current browser session (until you close the tab or browser).
    It's handy for temporary info like a shopping cart during an online session.
    Not secure for sensitive data either.  */

    
    sessionStorage.setItem('cartTotal', '100');
    console.log(sessionStorage.getItem('cartTotal'));

