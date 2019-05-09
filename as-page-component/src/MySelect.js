'use strict';

function urlSearchWithParam(name, value) {
    var searchParams = new URLSearchParams(window.location.search)
    searchParams.set(name, value);
    return searchParams;
}

function searchParamsAsObject(searchParams) {
    const searchObject = {};
    for (var p of searchParams.entries()) {
        searchObject[p[0]] = p[1];
    }
    return searchObject;
}

function pushHistoryStateWithParameter(parameterName, selectValue) {
    console.log("pushState with "+parameterName+" = "+selectValue);
    const searchParams = urlSearchWithParam(parameterName, selectValue);
    const historyState = searchParamsAsObject(searchParams);
    console.log("historyState:");
    console.log(historyState);
    history.pushState(historyState, "", "?"+searchParams.toString());
}

function MySelect(props) {
    const [selectValue, setSelectValue] = React.useState(props.initialValue);
    const [skipPushState, setSkipPushState] = React.useState(false);
    const parameterName = props.parameterName; 

    // push browser history
    React.useEffect(() => {
        if(parameterName) {
            if(!skipPushState) {
                pushHistoryStateWithParameter(parameterName, selectValue);
            }
            setSkipPushState(false);
        }
    }, [selectValue]);


    // subscribe to popstate
    React.useEffect(() => {
        if(parameterName) {
            const handlePopState = () => {
                const paramValue = history.state[parameterName];// || props.initialValue;
                // const a = history.state ? (history.state.a || props.initialValue) : props.initialValue;
                console.log("handlePopState for "+parameterName+": "+paramValue);
                setSkipPushState(true);
                setSelectValue(paramValue);
            }
            window.addEventListener("popstate", handlePopState);
            return () => {
                window.removeEventListener("popstate", handlePopState);
            }
        }
    });

    function handleSelectChange(event) {
        setSelectValue(event.target.value);
    }

    return (
        <React.Fragment>
      <select value={selectValue} onChange={handleSelectChange}>
        {
            props.options.map((option) => (
            <option key={option.value} value={option.value}>{option.display}</option>
         ))
        }
      </select>
      <br/>
      {parameterName} select value is: {selectValue}
        </React.Fragment>
    );
}


// const domContainer = document.querySelector('#MySelect');
// const options = window._selectOptions;
// const initialValue = window._selectInitialValue;
// ReactDOM.render(<MySelect options={options} initialValue={initialValue}/>, domContainer);

// for(let i = 0; i < window._MyComponentInstances.length; i++) {
//     const config = window._MyComponentInstances[i];

//     const domContainer = document.querySelector(config.containerSelector);
//     ReactDOM.render(<MySelect key={i} options={config.options} initialValue={config.initialValue} parameterName={config.parameterName}/>
//         , domContainer);
// }