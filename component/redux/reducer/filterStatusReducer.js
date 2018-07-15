


const filterStatusReducer=(state='SHOW_ALL',action)=>{
    if(action.type==='FILTER_SHOWALL') return 'SHOW_ALL';
    if(action.type==='FILTER_MEMORIED') return 'MEMORIED';
    if(action.type==='FILTER_NEED_PRACTIVE') return 'NEED_PRACTIVE';
    return state;
  }
  export default filterStatusReducer