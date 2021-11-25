Some part of this project learned from tutorial from internet. 
本项目是我在互联网上学习的时候跟着作者编写代码的。具体笔记步骤如下：

#1  新建constants folder,设置Action对应的常量值；
#2  建立actions folder,建立action的js文件，引入已经创建好的actions常量，根据逻辑设立所会发生的action,比如load, load success, load fail.
#3  建立  reducers folder, 编写相对应的reducer 函数并引入actions常量,设置对应的actions变化引起的新state：
imagesReducer.js, loadingReducer.js,errorReducer.js
#4 建立一个总的reducer reducerIndex.js去集合所有的细分reducer。
#5 在App.js中import Provider,配置store.创建storeIndex.js文件，将rootReducer引入并在configureStore中使用。
#6 在App.js中import configureStore并配置Provider
#7 在组件中import connect,然后新建常量mapStateToProps，并与组件建立connect，导出。
#8 saga分两部分，一部分是watchSaga负责监听action是否被分发，另一部分是workSaga，负责处理数据。
#9 在configureStore中创建SagaMiddleware,并在createStore中applyMiddleware. 并在store中调用sagaMiddleware的run方法。
#10 watcher saga -> actions -> worker saga. 在rootSaga中引入effects.并创建watcher saga 及worksaga.在storeIndex 中调用dispatch方法分派action， 这样action对应的worksaga才会工作.
#11 在分发action的组件中引入action类型，并分发。例如imageGrid.js。在组件中调用mapDispatchToProps函数。创建促发action的ui属性，例如按钮。
#12 如果disptch 是在store中分发的，比如store.disptch(actionType);该action会在ui挂载时马上执行。Saga 的effect API分为Blocking 与nonBlocking两种。take是Blocking的，从上到下一个一个进行，并且无论促发了多少次action，对应的workersaga只会调用一次，takeEvery是nonBlocking的，无序，促发了就进行，促发几次，workersaga就调用几次。
#13 好用的api方法：Object.entries(images) 能将object转换成array。
#14 VSCode删除一行快捷键：commond+shift+k
#15 新建pageReducer.js来处理图片更新的状态更新。并将此reducer加进combineReducer中，创建处理图片更新的saga文件，imagesSaga.js,在此文件中创建generator functions.在sagaIndex.js文件中引入imagesSaga文件。在saga文件中编写与action对应的方法。创建api文件夹，专门处理调用api。saga中调用了call effect,里面的第一个参数就是将要在api中编写的call api的方法。在api中获取数据，然后传给saga中的调用了call方法的常量。获得数据后，在saga文件中继续调用put
api方法，分发setImages及setError方法对应的actions。



