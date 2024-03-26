// In some case we want to provide the available data (many) components in the application
// Although we can pass data to cpomponents using props this can be 
// very difficult to do if allmost all the components in your application 
// required the data

// this often end up with something called the prop drilling

// this is where the provide pattern can help with us
// rather than passing the data we can make data available 
// to mulipule components. We will use provider 
// provide is a higher order components 
// example is context api in the react


// example of the provider

const DataContext = React.createContext();

function App(){
    const data = { };

    return (
        <div>
            <DataContext.Provider value={data}>
                <SideBar />
                <SideBar />
            </DataContext.Provider>
        </div>
    )
}


// styled componets is good example 
// Pros possible to pass data to many components without having
// to manually pass it though each component layer

// cons : Overusing the provider pattern van result in performance issue
// All componets that consume the contet re-render on each state change



