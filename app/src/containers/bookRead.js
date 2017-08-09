/**
 * Created by apple on 2017/7/6.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Dimensions,
    ScrollView,
    Platform,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Switch,
    StatusBar
} from 'react-native';
import {connect} from 'react-redux';
import DeviceBattery from 'react-native-device-battery';
import Slider from "react-native-slider";
import * as actions from '../actions/bookRead';
import pxToDp   from '../util/px';

const bookStyleArray = [
    {
        path:require('../images/read/bg-1.jpg'),
        color:'#484136'
    },
    {
        path:require('../images/read/bg-2.jpg'),
        color:'#32373e'
    },
    {
        path:require('../images/read/bg-3.jpg'),
        color:'#332d29'
    },
    {
        path:require('../images/read/bg-4.jpg'),
        color:'#372e33'
    },
    {
        path:require('../images/read/bg-5.jpg'),
        color:'#606277'
    },
    {
        path:require('../images/read/bg-6.jpg'),
        color:'#888888'
    },
]

class Main extends Component {
    static navigationOptions = {
        header:null,
        gesturesEnabled:false
    }

    //显示顶部导航菜单
    showTop(){
        return(
            <View style={styles.topNav}>
                <StatusBar barStyle="light-content" hidden={false} />
                <TouchableOpacity style={styles.leftNav} onPress={()=>this.props.navigation.goBack()}>
                    <Image
                        style={styles.leftNavImg}
                        source={require('../images/read/left-nav.jpg')}
                        />
                </TouchableOpacity>
            </View>
        )
    }

    //根据底部菜单模式返回组件
    getBottomNavTop(id){
        switch(id){
            case 2 :
                return(
                    <View style={styles.bottomNavTop}>
                        <Image
                            style={styles.fontImageSmall}
                            source={require('../images/read/bottom-2.jpg')}
                            />
                        <Slider
                            style={styles.chapterSlider}
                            value={this.props.bookRead.fontSizeVal}
                            maximumTrackTintColor="#525967"
                            minimumTrackTintColor="#e8e3d4"
                            minimumValue={30}
                            maximumValue={100}
                            thumbTintColor="#e8e3d4"
                            thumbTouchSize={{width:pxToDp(40),height:pxToDp(40)}}
                            onSlidingComplete={(value) => this.props._handle({fontSizeVal:value})}
                            />
                        <Image
                            style={styles.fontImageBig}
                            source={require('../images/read/bottom-2.jpg')}
                            />
                    </View>
                )
            case 3 :
                return(
                    <View style={styles.bottomNavTop}>
                        <Image
                            style={styles.lightImageSmall}
                            source={require('../images/read/light.jpg')}
                            />
                        <Slider
                            style={styles.chapterSlider}
                            value={this.props.bookRead.lightVal}
                            maximumTrackTintColor="#525967"
                            minimumTrackTintColor="#e8e3d4"
                            thumbTintColor="#e8e3d4"
                            minimumValue={0}
                            maximumValue={100}
                            thumbTouchSize={{width:pxToDp(40),height:pxToDp(40)}}
                            onSlidingComplete={(value) => this.props._handle({lightVal:value})}
                            />
                        <Image
                            style={styles.lightImageBig}
                            source={require('../images/read/light.jpg')}
                            />
                    </View>
                )
            default :
                return(
                    <View style={styles.bottomNavTop}>
                        <TouchableOpacity>
                            <Text style={styles.white}>上一章</Text>
                        </TouchableOpacity>
                        <Slider
                            style={styles.chapterSlider}
                            value={this.props.bookRead.chapterSliderVal}
                            minimumValue={0}
                            maximumValue={100}
                            maximumTrackTintColor="#525967"
                            minimumTrackTintColor="#e8e3d4"
                            thumbTintColor="#e8e3d4"
                            thumbTouchSize={{width:pxToDp(40),height:pxToDp(40)}}
                            onSlidingComplete={(value) => this.props._handle({chapterSliderVal:value})}
                        />
                        <TouchableOpacity>
                            <Text style={styles.white}>下一章</Text>
                        </TouchableOpacity>
                    </View>
                )
        }
    }

    //切换皮肤
    selectSkin(id){
        this.props._handle({
            backStyle:id-1,
        })
    }

    //是否选中当前皮肤组件
    showSelectIco(id){
        if(this.props.bookRead.backStyle == id){
            return(
                <View style={styles.skinSelectView}>
                   <Image
                       style={styles.skinSelectImage}
                       source={require('../images/read/choose.png')}
                   />
                </View>
            )
        }
    }

    //切换繁体简体
    changeLanguage(val){
        this.props._handle({
            language:val
        })
    }

    //根据底部菜单模式返回组件
    getBottomNavB(id){
        switch(id){
            case 2 :
                return(
                    <View style={styles.bottomNavB}>
                        <View style={styles.languageView}>
                            <Text style={styles.languageText}>
                                {this.props.bookRead.language?'切換成簡體':'切换成繁体'}
                            </Text>
                            <Switch
                                value={this.props.bookRead.language}
                                onValueChange={(val)=>this.changeLanguage(val)}
                            />
                        </View>
                    </View>
                )
            case 3 :
                return(
                    <View style={styles.bottomNavB}>
                        <TouchableOpacity onPress={()=>this.selectSkin(1)} style={styles.bottomNavSkin}>
                            <Image
                                style={styles.skinImage}
                                source={require('../images/read/book-style-1.jpg')}
                                />
                            {this.showSelectIco(0)}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.selectSkin(2)} style={styles.bottomNavSkin}>
                            <Image
                                style={styles.skinImage}
                                source={require('../images/read/book-style-2.jpg')}
                                />
                            {this.showSelectIco(1)}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.selectSkin(3)} style={styles.bottomNavSkin}>
                            <Image
                                style={styles.skinImage}
                                source={require('../images/read/book-style-3.jpg')}
                                />
                            {this.showSelectIco(2)}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.selectSkin(4)} style={styles.bottomNavSkin}>
                            <Image
                                style={styles.skinImage}
                                source={require('../images/read/book-style-4.jpg')}
                                />
                            {this.showSelectIco(3)}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.selectSkin(5)} style={styles.bottomNavSkin}>
                            <Image
                                style={styles.skinImage}
                                source={require('../images/read/book-style-5.jpg')}
                                />
                            {this.showSelectIco(4)}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.selectSkin(6)} style={styles.bottomNavSkin}>
                            <Image
                                style={styles.skinImage}
                                source={require('../images/read/book-style-6.jpg')}
                                />
                            {this.showSelectIco(5)}
                        </TouchableOpacity>
                    </View>
                )
            default :
                return(
                    <View style={styles.bottomNavB}>
                        <TouchableOpacity onPress={()=>this.bottomNavTab(1)} style={styles.bottomNavList}>
                            <Image
                                style={styles.settingImage}
                                source={require('../images/read/bottom-1.jpg')}
                                />
                            <Text style={styles.settingText}>章节列表</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.bottomNavTab(2)} style={styles.bottomNavList}>
                            <Image
                                style={styles.settingImage}
                                source={require('../images/read/bottom-2.jpg')}
                                />
                            <Text style={styles.settingText}>字体设置</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.bottomNavTab(3)} style={styles.bottomNavList}>
                            <Image
                                style={styles.settingImage}
                                source={require('../images/read/bottom-3.jpg')}
                                />
                            <Text style={styles.settingText}>主题亮度</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.bottomNavTab(4)} style={styles.bottomNavList}>
                            <Image
                                style={styles.settingImage}
                                source={require('../images/read/bottom-4.jpg')}
                                />
                            <Text style={styles.settingText}>缓存下载</Text>
                        </TouchableOpacity>
                    </View>
                )
        }
    }

    //显示底部导航菜单
    showBottom(){
        return(
            <View style={styles.bottomNav}>
                {this.getBottomNavTop(this.props.bookRead.bottomNavModel)}
                {this.getBottomNavB(this.props.bookRead.bottomNavModel)}
            </View>
        )
    }

    //触摸页面，显示隐藏菜单
    touchContent(){
        this.props._handle({
            showMenu:!this.props.bookRead.showMenu,
            bottomNavModel:0
        })
    }

    //底部菜单导功能
    bottomNavTab(id){
        switch(id){
            case 1 :
                this.props.navigation.navigate("Chapter")
                break;
            case 2 :
                this.props._handle({
                    bottomNavModel:2
                })
                break;
            case 3 :
                this.props._handle({
                    bottomNavModel:3
                })
                break;
            case 4 :
                this.props._handle({
                    bottomNavModel:4
                })
                break;
            default :
                break;
        }
    }

    componentWillUnmount(){
        this.props._handle({
            showMenu:false,
            bottomNavModel:0
        })
    }

    render() {
        const textStyle = {
            color:bookStyleArray[this.props.bookRead.backStyle].color,
            fontSize:pxToDp(this.props.bookRead.fontSizeVal),
            lineHeight:pxToDp(this.props.bookRead.fontSizeVal*2),
            marginBottom:pxToDp(30)
        }
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}
                />
                <Image
                    source={bookStyleArray[this.props.bookRead.backStyle].path}
                    style={styles.backImg}
                />
                <View style={styles.readWrap}>

                    <View style={styles.topView}>
                       <Text style={{color:textStyle.color}}>第一章    觉醒的武魂</Text>
                       <Text style={{color:textStyle.color}}>绝世武魂</Text>
                    </View>
                    <ScrollView contentContainerStyle={styles.scroll}>
                        <TouchableWithoutFeedback onPress={()=>this.touchContent()}>
                        <View>
                            <Text style={textStyle}>
                                今年1月份，新开源的react-natvigation库备受瞩目。在短短不到3个月的时间，github上星数已达4000+。
                                Fb推荐使用库，并且在React Native当前最新版本0.44中将Navigator删除。react-navigation据称有原生般的性能体验效果。
                                可能会成为未来React Native导航组件的主流军。本篇内容基于【 ^1.0.0-beta.9 】版本来介绍关于该库的使用和实战技巧。
                            </Text>
                            <Text style={textStyle}>
                                当我还在干保险的时候，我就接触了外卖小哥。市面上的外卖平台最牛的非美团莫属，其他的还有百度、饿了么，尚班族等。

                                还记得那一天保险公司搞了个活动，需要利用中午的时间。于是我和同事合伙叫了美团外卖。在规定的时间以内（美团规定不超过40分钟）我们吃到了外卖，觉得还可以。

                                由于我不好意思发展亲戚朋友做下线，所以我保险公司的业绩很差，我也不太喜欢保险公司发展下线，在熟人之间游弋的工作模式。所以我要了外卖小哥的微信号。

                                通过和小哥聊天感觉干外卖并不差，一单赚个四块钱。一天跑个三十单，一个月三四千块钱养家糊口，够了。

                                于是我二话没说报名干美团外卖，干了外卖才知道，我们不光要和竞争平台比服务。还要懂得更多关于客户的心理特征。
                            </Text>
                            <Text style={textStyle}>
                                第三，你干了外卖就不要想再和狐朋狗友小聚小酌。因为你根本没有时间和朋友一起吃饭。说是一个月可以调休四天，其实大家除非遇到特发事件，否则都不调休。

                                第四，你没有一个好的身体根本玩不转。小哥的时间绝对是争分夺秒的。不谈别的，我干了一个月瘦了七八斤，小肚子上的肥肉全部扔到路面和楼梯上了。因此你仔细观察干外卖的没几个胖子，这和当兵的差不多。偶尔见到胖子，一般也是值班的站长或者调度临时补充的。

                                第五，干外卖是要玩车技的，不管电动车还是摩托车都必须赶着骑。实话告诉你，我一天闯五十个红灯算少的。所以外卖这一行，人员流动特别大。冬天舔着风雪，夏天顶着烈日。

                                最关键的一点我留到最后说，那就是外卖得到差评是要被重重罚款的。这也是我今天重点要谈的。一般一个差评罚款一百块，具体金额视不同地区可能会有浮动，但我敢保证任何地方的美团外卖的差评罚款都不会低于五十元人民币一个！

                                所以每一个美团外卖小哥都怕得到差评。我们这里一个月得到四个差评自动辞职。

                                现在我来告诉你关于我离开美团外卖的这四个差评是怎么得的。
                            </Text>
                        </View>
                        </TouchableWithoutFeedback>
                    </ScrollView>
                    {this.props.bookRead.showMenu&&this.showTop()}
                    {this.props.bookRead.showMenu&&this.showBottom()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#eee"
    },
    backImg:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
    readWrap:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        position:"absolute",
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:"transparent",
        paddingTop:pxToDp(150),
        paddingBottom:pxToDp(150)
    },
    tabViews:{
        backgroundColor:"transparent"
    },
    topView:{
        position:"absolute",
        top:0,
        left:0,
        flexDirection:"row",
        justifyContent:"space-between",
        width:Dimensions.get('window').width,
        height:pxToDp(150),
        alignItems:"center",
        paddingLeft:pxToDp(50),
        paddingRight:pxToDp(50)
    },
    topNav:{
        backgroundColor:'#282828',
        position:"absolute",
        top:0,
        left:0,
        width:Dimensions.get('window').width,
        height:pxToDp(Platform.OS === 'ios'?210:150),
    },
    leftNav:{
        width:pxToDp(60),
        height:pxToDp(60),
        position:"absolute",
        bottom:pxToDp(40),
        left:pxToDp(50)
    },
    leftNavImg:{
        width:pxToDp(34),
        height:pxToDp(60),
    },
    scroll:{
        paddingLeft:pxToDp(50),
        paddingRight:pxToDp(50)
    },
    bookText:{
        fontSize:pxToDp(48),
        lineHeight:pxToDp(84),
        marginBottom:pxToDp(30)
    },
    bottomNav:{
        backgroundColor:'#282828',
        position:"absolute",
        bottom:0,
        left:0,
        width:Dimensions.get('window').width,
        padding:pxToDp(40)
    },
    bottomNavTop:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderBottomWidth:1,
        borderBottomColor:'#393f4c',
        marginBottom:pxToDp(54),
        paddingBottom:pxToDp(54),
        marginTop:pxToDp(10)
    },
    chapterSlider:{
        flex:1,
        marginRight:pxToDp(30),
        marginLeft:pxToDp(30),
    },
    white:{
        fontSize:pxToDp(44),
        color:"#e8e3d4"
    },
    bottomNavB:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",

    },
    bottomNavList:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },
    settingImage:{
        width:pxToDp(80),
        height:pxToDp(66),
        marginBottom:pxToDp(36),
    },
    settingText:{
        fontSize:pxToDp(36),
        color:'#989faf'
    },
    lightImageSmall:{
        width:pxToDp(64),
        height:pxToDp(64)
    },
    lightImageBig:{
        width:pxToDp(74),
        height:pxToDp(74)
    },
    fontImageSmall:{
        width:pxToDp(70),
        height:pxToDp(54)
    },
    fontImageBig:{
        width:pxToDp(80),
        height:pxToDp(66)
    },
    bottomNavSkin:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },
    skinImage:{
        width:pxToDp(120),
        height:pxToDp(120)
    },
    skinSelectView:{
        position:"absolute",
        backgroundColor:'#000000',
        width:pxToDp(60),
        height:pxToDp(60),
        opacity:0.3,
        borderRadius:pxToDp(14),
        justifyContent:"center",
        alignItems:"center",
    },
    skinSelectImage:{
        width:pxToDp(34),
        height:pxToDp(21)
    },
    languageView:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    languageText:{
        color:'#e8e3d4',
        fontSize:pxToDp(50)
    }

});

function mapStateToProps(state){
    return state;
}


function mapDispatchToProps(dispatch){
    return {
        _handle:(options)=>{
            dispatch(actions.handle(options))
        },
        _getList:(options)=>{
            dispatch(actions.getList(options))
        },
    }
}

const BookRead = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default BookRead;