# Project Overview

## Project Links

- [GitHub Repository](https://github.com/joeyhutchinson/react-project-v2)<br/>
- [CodeSandbox Sandbox](https://codesandbox.io/s/github/joeyhutchinson/react-project-v2)<br/>
- [Hosted Location]()<br/>

## Description

This project will utilise the open sourse data available from NASA, and create a one stop shop for all things planet Mars. It will be a multi page website, and will include searchable images taken by past and current rovers, weather data which is updated regularily from the API data, and - if all goes to plan - will also include an interactive embedded Google Mars map. <br/>

## Wireframes
**Homepage**<br/>
[Wireframe 1 - Homepage](https://photos.google.com/share/AF1QipMwMH7_znQlQ6FihfwVoP3q7yiKVvB8rx86eK0r5B7xNnE1O0N2Gc8Q3nbpsMsDqA?key=RERmXzlZWkRvNmV2Q2JSZkZJbUdyWDllVWhGQ2tR)<br/>
(Homepage set-up and brief overview and layout of website.)<br/><br/>
**Weather widget - large**<br/>
[Wireframe 2 - Large weather widget](https://photos.app.goo.gl/fjddEykfgrUSte257)<br/>
(Large dynamic weather widget set-up on /weather page.)<br/>
[NASA original weather widget](https://mars.nasa.gov/insight/weather/)<br/>
(NASA's version of the weather widget in which I am trying to replicate.)<br/><br/>
**Weather widget - small**<br/>
[Wireframe 3 - Small weather widget](https://photos.app.goo.gl/KwRZbjRRBizgCTLT9)<br/>
(Small dynamic weather widget set-up in header.)<br/>
[Beaufort Scale info](https://en.wikipedia.org/wiki/Beaufort_scale)<br/>
(Scale used to determine what would be classed as "windy weather".)<br/><br/>

## API Info

**NASA Open API details:** [NASA API](https://api.nasa.gov/)<br/>

- **InSight Mars Weather Service API**<br/>
  NASA’s InSight Mars lander takes continuous weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars’ equator. This API provides per-Sol summary data for each of the last seven available Sols (Martian Days). As more data from a particular Sol are downlinked from the spacecraft (sometimes several days later), these values are recalculated, and consequently may change as more data are received on Earth. This API is maintained and provided by NASA Jet Propulsion Laboratory and Cornell University.<br/>
- **Mars Rover Photos API**<br/>
  This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists. Each rover has its own set of photos stored in the database, which can be queried separately. There are several possible queries that can be made against the API. Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date. A photo taken on Curiosity's 1000th Martian sol exploring Mars, for example, will have a sol attribute of 1000. If instead you prefer to search by the Earth date on which a photo was taken, you can do that too. Along with querying by date, results can also be filtered by the camera with which it was taken and responses will be limited to 25 photos per call. Queries that should return more than 25 photos will be split onto several pages, which can be accessed by adding a 'page' param to the query.<br/>

**Google Maps (Mars) API details:** [Google Maps API]()<br/>

## MVP/ Post MVP

#### MVP (Most Valuable Players)

- Pull data from NASAs Open APIs to generate weather widgets (small in fixed header and large on Weather page.)
- Embed toggle switch in header which enables users to toggle between celsius and fahrenheit data in weather widgets
- Pull image data from NASA's Open APIs to generate dynamic image galleries on each of the rover pages - Curiosity, Opportunity and Spirit
- Create sliding image carousel on homepage.

#### Post MVP

- Pull Google Maps API data to embed dynamic Mars map on Map webpage.

## React Component Hierarchy

[Hierarchy Draft 1](https://photos.google.com/share/AF1QipOYuBPHb3RH9W9jBdtETHhBwoj3yavbeIQqGHrpgEPBs6_tfuG_WMjnFVA6D6SRPg?key=ZXlLZEJlakpOMDAzWC1hUFpVZFpfWDNrZFE1eEtB)<br />

[Hierarchy Draft 2](https://www.draw.io/?lightbox=1&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.drawio#R7V1bd5u4Fv41Xj3nIV4IEODHJG46s6Y50zXpmk6fumRbsZli4ABO4vn1I4m7JGMcI2wnpA81Qtz2%2FvbWvkkaGbfrl08RClf3wQJ7I11bvIyM6UjXgalb5D%2Fask1bbBOmDcvIXWSdyoYH9x%2BcNWpZ68Zd4LjWMQkCL3HDeuM88H08T2ptKIqC53q3x8CrPzVESyw0PMyRJ7Z%2BcxfJKmu1oFme%2BAW7y1X%2BaGBN0jNrlPfOPiVeoUXwXGkyPo6M2ygIkvTX%2BuUWe5R6OWHS6%2B52nC3eLMJ%2B0uaCP78Y3%2Fw%2Fk80z%2FOfH%2FTX8y1sF6AoYRnqfJ%2BRtsm%2FOXjfZ5kSIgo2%2FwPQ22si4eV65CX4I0ZyefSZsJ22rZO2RI0B%2BPrqedxt4QUSO%2FcAnnW6Q5y59cujhR%2FKmNwsUr9jdaPc4iYKfOL9gpBt3dxb5K87kVCfkusneFEcJftlJBFCQloASB2ucRFvSJbvA0jJuZHi0nOz4ueSulXNsVWGskXdEGaKWxb1LmpMfGdkPYMHEelccKOQh44BuihwwLAkHIFDFAcPZzwG8IHohOwyiZBUsAx95H8vWmzqPyj6fgyDMSP03TpJtpuTQJgnqfCMEjLZ%2FVQ%2B%2B05uNYX44fclunh5tsyOiWEJ6R8%2F1fxY8ou%2FbzCHyecEmmuMm7ZBpuQRFS5w0dISGnOcR9lDiPtXfRMa%2F7NIvgUvesZRWu44VaHEQSF8su6pEwXUUoW2lW0g7xA3P4TCZP7cEVXrHEmLFN74edab%2BllCXS695IgQCqASBjlFHhqkpQiCY1J5jaD0gMJemEyNQGIA09kdHssBPKu307%2B7uPDQesI7E21Ejlv3uOLeXIZajRAHYsK4ADAfWb5FCSlAAezWJcKOONMlEkz9n13vt6a9G89jwQvFbjJZafbTUL8BIs9UYaa8dIrvCUv79NSxZHvVz4hD55PeS%2Fr4Ow7x5FuWNu1vSSyt4tP6%2FoZ46Q8bVc%2BaXXJMufhCtkVd24O%2Fk5g1xghJMLmC300b2TYLX4dctgYU9zTsTCrj8DUhb9UN2v7PQkZOoPX4jisM0hPLovlCpEsXD0WcG8wyrLiZpX0DsLMyKnzknKMZRRq1ciDNkHeU9wgmnrXTRewQy7xHwrkNnYzEQddkNmv9cMu3UDk6PaO162xRO5BRah4x9hkFpusLeE07cORLOsN63smtQ5DJI7ugfIz%2B%2BinHkPjI43rDIGHmPmClK%2BhZa%2BFKcYrC5ilPcpIhn4JEgHvKhQEgISVtZmKs4ygkLGWlJy5T%2Bpm8HKSkh4ce%2BvqDom6PnVbfRy9uk%2FCvO3G38eeLS4YSdvQ3WYeBjNvTmV6TcLK4gqGZvkcoUbQbssCpGtJXFZOiJUopqzakQ0SYWrqFNVGYIArzr4tTaXSzSh1fDQfRMyhtYDo%2B0UWMtWdynfLXK16dS2Ya%2BxamCtKWcQiqpZU9olMzQthWyk%2FGyaE9FtzhnVy7JJLi8rnIOxWX7svICPOfZYcH%2BamMdlFk%2FAb3tdOtBETpBsc4caEJNVKyPzhzP530oVoMbxXVLolhlgVFlcVEgxkXvCMPI13dL%2B9MPaibvGpyc9sbkPOxzdUaz3dJoBse6lcfJgC3w4ReMFp3LwOn1Dy8DpiQx07P%2BEbMC3zBKVjj65hIIJg90kH9jmkg%2FOy7oLbJjguNSIXIWLiH94M0ITmVEdNcsCZwSM1VFQC%2Fbp%2B56SV7dc2f0A%2BI5ImbW3RQlaIZi%2FOMT9nGEvHH8tJSxdGqZ%2Bo0jsvTOgZPpx1EnGTUD2jWmAUNkGjREntnKRg%2F9HEePMnRTidZ8H1WDNfLQTdthp%2Fv0l8nZZHwGtG3skb9R4TV3ncXgX9jUDnovrr%2Ba2CPQOzFuOHQpjkXmeskUY5N3dzQ62a15pKsJppugzm%2FAqyDFoUJdHNJdwrWXNzeOQ06wZENCzx6FWGe0IGPo%2BO9YID6LozRQOKtpaShzKehaj5sUURM5S%2BtM74ALpsWpN03kgixWyWvn7pggGlOx5xJ34ldq6rCn2TeMLWnzDzdtL%2BPTZdAZhe5veFu9hrT8%2BEmbZN2pmqx2To%2Ft6cHcJ3JkWVmBEu%2BtQPpvJJQ7HYECSR6oomuPK0XjIy4QijI6kcADqoKHKXqbOSMpHUa0zDInRRn7NR4fNY3qDT4cvEI%2BIfNXmuQIlsuUv%2FZNsnLjcRgFYTyudBCyIOkDd2U8iswJf0tJSkXMk7zmYyLidqOZh6c0h8M%2FtXay4TPeK9R1C9agDm1RERbuSC9Qh7Ky1wwvOb%2Fug5nr4TzeUrB01k0MuFaD2QGNDa5QwTr5kA%2FblFX6i2tapk0HbQ%2FFsTs%2FxCpuzND3VUW5P4RoyxlXdc8bsH%2BsE8nVNkLeumjrRBZA4Yok%2BzLeoei2PcyjwPO%2BBl%2BD8Hf%2FnkhfcktBdJxgnmFwFOhaC3tepkCVCbfdSc10v060TF20l%2FO9TrOlJgokVKApKoLe9Ry1wRjzAnHUEIyxDGuiBldtSiCPLfA6SiPkr1nNVZFbF1Uo%2FiwOZVZTE9mvoaaZEtW7cDTNpsaph2bY%2BxLELi3VGEk8%2F89ch8Ig5i3lhEJjhyqvJAWCTUJARt4xn2%2FGbAcymLj%2B8itD15VVAeT6ZUnrCcbk%2BXiNwnFYphqqIwn768YOBBo3TktLpHo1BC1Rxsl7e8FyexAY9KltaRIwWBqaEBtrAIMIhgkf%2BJc4Xv1iwW7jeKHw%2FP0tQc7Mk9PWaTGXk5Ylhg0y1CB1h8I0m5NLAyNpu3YwjU3OeZHMFQSOhMSmsrmC4iB3HCx3xXUaIkHHxGkacNPooPZMZV0tlYtEzO7UTffUzN1oTiNLcvWy6cfKUgKK8Zz7yLu96r4oLSll6ZXSsmkK%2FQ5oHRBRWlvSJxXFYvsv1IpqsCMv1SpUP0B3jQ1HTGD1io0WpWIsCIKjj084rQrL6oTShTm0qlRpbaOCB%2BNrFiRJsD4AXztKx3gAsdq0Mfm%2BjY%2FHm3DBZhupYn09oWMAUS0YfbJezFz%2B9vG7wP3zqCzoR3FztQcSBpkSBikrPRBDANUJNrXpNZ0z7fjcaD8s4%2Be2iepUFuJXxjIx35JlVwZuSbglGfx65VYu4FXLCPsLYnMMDJMyDJxavoAYS%2FiGZ8z8q3CM%2FP7PY6Eq%2Fzvwr%2BDfRBzS%2BuWfGKW4%2FvIr5R3yxKkh74dPDm8bnljOTNFnzAWKfm1ErO5zZJZQ5s0K03qMTEFRvgDolXGiQ0drRy%2BIaUXauDemyZIQvTLNFke19xGhKXLSDVnsE0doZPmTXiM0tjhk7jB5WDXgYO00sq5fb7BFoU6vy5ROrFstXVPsdcuUvoYpVzqXUM%2FL4KqFzDJ1C%2FK8d%2FeBlQuczdZctzvWgDGq1e4Cpyjm3VG9y46%2B4MglRKUq%2F6CJmy1qsHKbdn%2BxrykH0JFFgBNuJVShiKCr1eO45xjmhEOogiJAR5LUWQWzQAxWDLVi3ZYH8fMxT14qNhENhMvXZhNOm5UNp9Jm1mm1mbOjrKdjZeZwORDD6EOZiU7rFLvrQZmpVma2fW7KzGpR6%2FjAJtpeQLmjzk8PODl5zd3k7W66amdzVJsmplYmR6cTSsvZ0WrnsA4TV%2FfM0eYMJCiZwa%2FLQK9stdGJWOnwB1Gwrk%2Fzsun6R%2BSp8yhgiVqWiNCe0xDLBeT%2Bdi1tws%2B66YC1fIDFloS7pTUs6iIsoif%2F4T4I%2FPgD5dpm4KGYaeKiMbLVynplIdBkSyicuf%2FS89pCINWhnTsV%2FPxFs%2BX85GO9CrO%2BWYzkvcym%2FormVeYDVbV6ZxO51B84bNbV4Ikc7olwCLFl01b6XctSu8AocRu9VFnUbzIx63EWx9635oM0zoJf3CS9I8yOvlfOlHeiB9vKgcJ4DdBarzWhKPzMr%2F2gaA668Jw9utWxj%2Btv9jLHXRNT4r%2BHIZGXjT9oY%2FVBbv3stLGk8u%2Fta2PNeo027lSL6qfVogCY%2FajRnQ%2FaqRd36Pe2%2Fc0%2B0oQF%2F6orAIVu5CaDClWrQoW57megQ7Vuo79DbPRQUNjcHDDZVsrSNakURl92bwU2YKIPTDh8UFUy7axvTMi2Ghww0R8mCAc44%2BL0ikKyt9BbM8Drexycun4O5JNl9tveisLDkFtueaKogo5f1jnfHnNneJifR1jvr8iUlmxuMwjAuQiAmnUkHdCTAHAxNmfPJiAT2NhfkQDkY8tbE4DuIdt9GETjVZ6i7WhsDvEObEai%2BGIHX6D3orzFOMgfwVO2i8Mn5Hk4EqPKl74GMl%2BKMzn5JolAb7F41rvXIcaJ7T5%2B2CtlVnFdANC0XgYymX87gPC1IFRje%2FHrsLYGYXcwGQqTuoSJGsuIN52BsONfZwkifkOBfpQVEEdMZrlMcYJcL%2F7K1ort1nI5%2FWZsfAL6DCwX8LpAuQbpPzEoyrYJu0e%2B%2B4jjhG6NSi%2FMdkiKE5Tg8bp68oAi%2BqpJK70xezR31%2FJyN%2F4cILYGknBdcWbYKeqMgsWOWU8qOW13ilJWcA%2FyjxhkZZCVs5IVfpPPM5CVbnZ%2BPj8rszqdt6xjSgubLLOodDpVbDlPOZyusImrD4GKau8nmvw5O2PLXH9zXzIGgqb%2Biqxis8XS4BckNcUeSJVkjJIN17sVjXRyePeywe8CrEo2gGk0Coci8OYPrS3phJIVndTMYXjY3Kfbqjx%2BjWd48i0%2FgSGqsg%2FMwx8mMe52efhQjDQ%2BAEU2qquPMcSgsrumMxbY9GIyUhD1%2FITTTWKK9dtYc4STTUTX1YzZ3pzkxwKH5Cuy01T2dC14ZBRiVz2vsF8erekmnvF4fHEIKQY9BQgRtv%2BUreYuraDih5oOEfK24skq9m0ERutldpwjTY8jeSlWw1WWwXhr4VidM5OM04djDVk1VtcrmZSRlfZrmrzX0Ao%2Ff8aULQ7Rb8mqZDHkN6Fwz8JJnLRV1Kaa%2FLDguzktl0Trzo0TJ4hnbtw3l9A4%2BRwt39xIAAx%2B%2BrCsMr3focAU3en6QlJpbLxxOaluI%2FJDML4dlrgsr6XbY3HjA%2BliUbm3pQBNsi1GmFT%2FShAU74ZOHCK%2FxskcJ5SEV8%2FZy1%2BTLn4QrekWTjyQ8ju5eQPLJaWQek7fQUxwufzVpC19lS7WxDvDqkZBBTmyXRd6VkFiEqfKMIPLDlbP7VsEr7yqRwU2pBRfr8VsyYgo1WFQHRxbRBp6XXj%2B7i5j9SsXnj9s8SAgifUUwl9bYl5Tx4I9xuHDmg4AaE0J7c%2FisCLCpVAX%2Bp%2FAx65UG%2Bi3LIpYUSK0Yb6JKMUeAk%2FW9r%2FNmjXJ1E18%2FYRcL7ut6y%2FSQ3t6sFSfJKTY4DLVXavsO%2FQuIMc5uzIrWIo4ZfuEACiOQaI7cmaIGyDWMLBALoRtQdE4BrIdSVWCTKxGrUMmopmrFAkcemo1WmmHWnHVJeHA6FPVWPX6Ptmqq9L9qtRlMqCYshxQoBYFE%2F38UCBmPAcUKB4TNKc%2FGJDDKKCOYhk1peUa98EC0x7%2FAg%3D%3D) <br/>

## Est. Time

| Component             | Priority | Estimated Time | Time Invested | Actual Time |
| :--------             | :------: | :------------: | :-----------: | :---------: |
| app                   |   High   |    1 Hours     |    2 Hours    |    1 Hours
| background            |   Medium |                |               |
| footer                |   Medium |                |               |
| header                |   High   |                |               |
| mobile-header         |   High   |                |               |
| scroll-to-top-class   |   Urgent |                |               |
| home                  |   Medium |                |               |
| slider                |   Low    |                |               |
| geology               |   Medium |                |               |
| map                   |   Low    |                |               |
| weather               |   Medium |                |               |
| temp-toggle           |   High   |                |               |
| weather-widget-lrg    |   High   |    3 Hours     |   4 Hours     |    12 Hours
| weather-items         |   High   |    1 Hour      |   2 Hours     |    0.5 Hours
| weather-widget-sml    |   High   |    3 Hours     |   4 Hours     |    4 Hours
| curiosity             |   Medium |                |               |
| opportunity           |   Medium |                |               |
| spirit                |   Medium |                |               |
| rover-image-gallery   |   High   |                |               |
| deimos                |   Medium |                |               |
| phobos                |   Medium |                |               |
| Total:                |   ----   |    6~ Hours    |    7 Hours    |

## Code Snippet

## Errors & Resolutions

**ERROR**: External error with NASA API data - InSight lander did not return temperature data for sol 322. Temperature data therefore unavailable for Weather component.<br/>
**SOLUTION**: Designed function to test for valid data and then returned placeholder text if temp data not available. (components/weather-widgets/weather-widget-lrg.js)<br/><br/>
**ERROR**: Error with if statement logic in small weather widget component - InSight lander did not return wind data for sol 327. Wind data therefore unavailable for small weather component i.e. dynamic display of sunny or windy icon. if statment not written to handle if wind data not available. Will not show anything (inc. temp) if wind data not available.<br/>
**SOLUTION**: Re-designed 'if statement' to test for valid wind data and temp data then returned placeholder text if wind data not available and/or temp data not available. If wind data is not available the default sunny icon will show and the temp data will still render. (components/weather-widgets/weather-widget-sml.js)<br/><br/>
