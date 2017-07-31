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
    StatusBar
} from 'react-native';
import DeviceBattery from 'react-native-device-battery';
import pxToDp   from '../util/px';

class BookRead extends Component {
    static navigationOptions = {
        header:null
    }
    constructor(){
        super();
        this.state = {
            index: 0,
            routes: [
                { key: '1', title: 'First' },
                { key: '2', title: 'Second' },
            ],
        };
    }

    render() {

        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}
                />
                <Image
                    source={require('../images/skin/default.jpg')}
                    style={styles.backImg}
                />
                <View style={styles.readWrap}>
                    <View style={styles.topView}>
                       <Text>第一章    觉醒的武魂</Text>
                       <Text>绝世武魂</Text>
                    </View>
                    <ScrollView contentContainerStyle={styles.scroll}>
                        <View>
                            <Text style={styles.bookText}>
                                今年1月份，新开源的react-natvigation库备受瞩目。在短短不到3个月的时间，github上星数已达4000+。
                                Fb推荐使用库，并且在React Native当前最新版本0.44中将Navigator删除。react-navigation据称有原生般的性能体验效果。
                                可能会成为未来React Native导航组件的主流军。本篇内容基于【 ^1.0.0-beta.9 】版本来介绍关于该库的使用和实战技巧。
                            </Text>
                            <Text style={styles.bookText}>
                                当我还在干保险的时候，我就接触了外卖小哥。市面上的外卖平台最牛的非美团莫属，其他的还有百度、饿了么，尚班族等。

                                还记得那一天保险公司搞了个活动，需要利用中午的时间。于是我和同事合伙叫了美团外卖。在规定的时间以内（美团规定不超过40分钟）我们吃到了外卖，觉得还可以。

                                由于我不好意思发展亲戚朋友做下线，所以我保险公司的业绩很差，我也不太喜欢保险公司发展下线，在熟人之间游弋的工作模式。所以我要了外卖小哥的微信号。

                                通过和小哥聊天感觉干外卖并不差，一单赚个四块钱。一天跑个三十单，一个月三四千块钱养家糊口，够了。

                                于是我二话没说报名干美团外卖，干了外卖才知道，我们不光要和竞争平台比服务。还要懂得更多关于客户的心理特征。
                            </Text>
                            <Text style={styles.bookText}>
                                第三，你干了外卖就不要想再和狐朋狗友小聚小酌。因为你根本没有时间和朋友一起吃饭。说是一个月可以调休四天，其实大家除非遇到特发事件，否则都不调休。

                                第四，你没有一个好的身体根本玩不转。小哥的时间绝对是争分夺秒的。不谈别的，我干了一个月瘦了七八斤，小肚子上的肥肉全部扔到路面和楼梯上了。因此你仔细观察干外卖的没几个胖子，这和当兵的差不多。偶尔见到胖子，一般也是值班的站长或者调度临时补充的。

                                第五，干外卖是要玩车技的，不管电动车还是摩托车都必须赶着骑。实话告诉你，我一天闯五十个红灯算少的。所以外卖这一行，人员流动特别大。冬天舔着风雪，夏天顶着烈日。

                                最关键的一点我留到最后说，那就是外卖得到差评是要被重重罚款的。这也是我今天重点要谈的。一般一个差评罚款一百块，具体金额视不同地区可能会有浮动，但我敢保证任何地方的美团外卖的差评罚款都不会低于五十元人民币一个！

                                所以每一个美团外卖小哥都怕得到差评。我们这里一个月得到四个差评自动辞职。

                                现在我来告诉你关于我离开美团外卖的这四个差评是怎么得的。
                            </Text>
                        </View>
                    </ScrollView>
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
    scroll:{
        paddingLeft:pxToDp(50),
        paddingRight:pxToDp(50)
    },
    bookText:{
        fontSize:pxToDp(48),
        //lineHeight:pxToDp(84),
        marginBottom:pxToDp(30)
    }

});

export default BookRead;