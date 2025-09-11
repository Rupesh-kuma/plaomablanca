const Dropdown = () => {
    return (
        <>
            <div className="container">
                <div className="my-5 text-end">
                    <div className="dropdown">
                        <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Subscribe to calendar
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="https://calendar.google.com/calendar/u/0/r?cid=webcal://palomablanca.com/?post_type%3Dtribe_events%26tribe_events_cat%3Dmikaella-bridal%26tribe-bar-date%3D2024-02-02%26ical%3D1%26eventDisplay%3Dlist">Google Calendar</a></li>
                            <li><a className="dropdown-item" href="webcal://palomablanca.com/?post_type=tribe_events&tribe_events_cat=mikaella-bridal&tribe-bar-date=2024-02-03&ical=1&eventDisplay=list">iCalendar</a></li>
                            <li><a className="dropdown-item" href="https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=2519ec6d-76e1-b971-b058-cb729560a178&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&nonce=638425833539069121.e75696ea-f24e-448c-95d3-6431c28c6d7c&state=TU5NT4QwFIT1t8CFdBdaKHAgxhW5mXjxTF4_1MYCTSlu9m_5Cy11TTy8Sftm3szEURTd-Tn4iXMPUU1JU-KqIaQibU7bAhdHWVe0pRLQGy4lKsuGo7YSBNGSFBw3nIqax_72-3BaLnC6N-A-ugQPHLScBVj_BO7UMu-7ZTLLKlNrtw6EWDe2cqvMzqab1d1FMn-W4Io8eMBDAAN6mYBpmDkcvcMfQwbv5UZ3NXL_9c4qJkf5JWe37hr6fzFycEE1qU-QWgNiVomQdRMiBhYJcL9mOMclyjHKSVAEk16tRsM18Fqt3o-qvS7pi3SGSXYvoWl2DlWzV-PLqvk9ewoNsqR-zJ5v6dk5pP8A">Outlook 365</a></li>
                            <li><a className="dropdown-item" href="https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook?deeplink=%2fowa%2f%3fpath%3d%252Fcalendar%252Faction%252Fcompose%26rru%3daddsubscription%26url%3dwebcal%25253A%25252F%25252Fpalomablanca.com%25252F%25253Fpost_type%25253Dtribe_events%252526tribe_events_cat%25253Dmikaella-bridal%252526tribe-bar-date%25253D2024-02-03%252526eventDisplay%25253Dlist%2526ical%253D1%26name%3dPaloma%2bBlanca%2bUpcoming%2bEvents%2b%257C%2bMikaella%2bBridal&sdf=0">Outlook Live</a></li>
                            <li><a className="dropdown-item" href="https://palomablanca.com/events/category/mikaella-bridal/list/?ical=1">Export .ics file</a></li>
                            <li><a className="dropdown-item" href="https://palomablanca.com/events/category/mikaella-bridal/list/?outlook-ical=1">Export Outlook .ics file</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dropdown;