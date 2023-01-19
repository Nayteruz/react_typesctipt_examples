import React, {FC} from "react";
import {Test} from "./components/polimorphic/Test";


const App: FC = () => {

    return (
        <div className="App">
            <Test as="h1" size="lg">
                Heading
            </Test>
            <Test as="p" size="md" >
                Paragraph
            </Test>
            <Test as="label" htmlFor="someId" size="sm" color="secondary">
                Label
            </Test>
            <Test as="a" href="/link">Link html</Test>
        </div>
    )
}

export default App;
