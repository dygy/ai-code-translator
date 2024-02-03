import {PropsWithChildren} from "react";

export default function RootLayout({children}: PropsWithChildren): JSX.Element {
    return (
        <html>
        <body>
        {children}
        </body>
        </html>
    );
}
