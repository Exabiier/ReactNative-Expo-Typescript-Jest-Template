import {render} from "@testing-library/react-native"
import HomeScreen from "./HomeScreen"

describe('Home Screen', () => {
    it("should show Text", () => {
        const { getByText, debug } = render(<HomeScreen />)
        debug();
        expect(getByText("Open up App.tsx to start working on your app!")).toBeTruthy();
    })
});