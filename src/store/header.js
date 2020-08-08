export const header ={

    state:()=>{
        return {
            headerHeight:0
        }
    },

    mutations:{
        setHeaderHeightMut(state,height){
            state.headerHeight=height;
            console.log("header height set to ", state.headerHeight);
        }
    },

    actions:{
        setHeaderHeight({commit},height){
            commit("setHeaderHeightMut",height);
        }

    },

    getters:{
        header_height:(state)=>state.headerHeight
    }
}