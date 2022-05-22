import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarBack}> ＜ </Text>
          <Text style={styles.appbarText}>Marketing</Text>
        </View>
        <View style={styles.appbarBottom}>
          <Text />
        </View>
      </View>
      <View style={styles.question}>
        <View style={styles.questionTop}>
          <View style={styles.icon}>
            <Text />
          </View>
          <Text style={styles.questioner}>Marketing Plannar(A)</Text>
          <View style={styles.questionButton}>
            <Text style={styles.buttonText}>Question</Text>
          </View>
        </View>
        <View style={styles.questionContent}>
          <Text>これからデータ分析を投資対象として勉強していければと思っているのですが、詳しい方がおりましたら初学者におすすめの学習方法や参考書を教えていただきたいです。</Text>
        </View>
      </View>

      <View style={styles.answerCount}>
        <Text style={styles.answerCountText}>4 answers</Text>
      </View>

      <View style={styles.answerContent}>
        <View style={styles.answerTop}>
          <View style={styles.answerIcon}>
            <Text />
          </View>
          <Text style={styles.answererOccupation}>Data Analyst(M)</Text>
          <Text style={styles.highEngageComment}>最高評価の回答</Text>
        </View>
        <View>
          <Text style={styles.answerText}>
            データ分析の基本は統計学なので、まずは統計学を学習してみると良いと思います。
            参考に、下記のテキストなどはいかがでしょうか？
            https://www.amazon.co.jp/%E5%AE%8C%E5%85%A8%E7%8B%AC%E7%BF%92-%E7%B5%B1%E8%A8%88%E5%AD%A6%E5%85%A5%E9%96%80-%E5%B0%8F%E5%B3%B6-%E5%AF%9B%E4%B9%8B/dp/4478820090
          </Text>
        </View>
        <View style={styles.answerFooter}>
          <View style={styles.answerFooterComponent}>
            <Text>♡</Text>
            <Text>10</Text>
          </View>
          <View style={styles.answerFooterComponent}>
            <Text>□</Text>
            <Text>1</Text>
          </View>
        </View>
      </View>
      <View style={styles.answerContent}>
        <View style={styles.answerTop}>
          <View style={styles.answerIcon}>
            <Text />
          </View>
          <Text style={styles.answererOccupation}>Data Analyst(M)</Text>
        </View>
        <View>
          <Text style={styles.answerText}>
            データ分析の基本は統計学なので、まずは統計学を学習してみると良いと思います。
            参考に、下記のテキストなどはいかがでしょうか？
            https://www.amazon.co.jp/%E5%AE%8C%E5%85%A8%E7%8B%AC%E7%BF%92-%E7%B5%B1%E8%A8%88%E5%AD%A6%E5%85%A5%E9%96%80-%E5%B0%8F%E5%B3%B6-%E5%AF%9B%E4%B9%8B/dp/4478820090
          </Text>
        </View>
        <View style={styles.answerFooter}>
          <View style={styles.answerFooterComponent}>
            <Text>♡</Text>
            <Text>10</Text>
          </View>
          <View style={styles.answerFooterComponent}>
            <Text>□</Text>
            <Text>1</Text>
          </View>
        </View>
      </View>

      <View style={styles.answerEntry}>
        <View style={styles.answerEntryForm}>
          <View style={styles.answerIcon}>
            <Text />
          </View>
          <View>
            <Text style={styles.answerEntryFormComment}>回答する</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerWrapper}>
          <Text>本</Text>
          <Text>虫メガネ</Text>
          <Text>笑顔</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroudColor: '#E5E5E5',
  },
  appbar: {
    width: '100%',
    height: 88,
    backgroundColor: 'grey',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarBack: {
    position: 'absolute',
    left: 23,
    fontSize: 30,
    bottom: 17.75,
  },
  appbarText: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
    lineHeight: 28.64,
  },
  appbarBottom: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  question: {
    backgroundColor: '#ffffff',
    borderBottomColor: '#dadada',
    borderBottomWidth: 1,
  },
  questionTop: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
    letterSpacing: -0.333333,
    fontSize: 12,
  },
  icon: {
    backgroundColor: '#e3e6e5',
    borderRadius: '50%',
    width: 40,
    height: 40,
  },
  questioner: {
    lineHeight: 18,
    paddingVertical: 9,
    paddingHorizontal: 8,
  },
  questionButton: {
    backgroundColor: '#FFD9F7',
    borderRadius: 10,
    position: 'absolute',
    right: 19,
    top: 6,
    height: 24,
    width: 104,
    paddingHorizontal: 22,
    paddingVertical: 5,
  },
  buttonText: {
    letterSpacing: -0.333333,
    lineHeight: 15,
    color: '#808080',
  },
  questionContent: {
    paddingLeft: 20,
    paddingBottom: 40,
    paddingTop: 8,
    paddingRight: 27,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 600,
  },
  answerCount: {
    height: 32,
    borderBottomColor: '#dadada',
    borderBottomWidth: 1,
    paddingVertical: 8,
    paddingLeft: 28,
  },
  answerCountText: {
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.33,
    color: '#808080',
  },
  answerContent: {
    borderBottomColor: '#dadada',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingTop: 7,
  },
  answerTop: {
    flexDirection: 'row',
    paddingBottom: 8,
  },
  answerIcon: {
    backgroundColor: '#e3e6e5',
    borderRadius: '50%',
    width: 24,
    height: 24,
  },
  answererOccupation: {
    paddingHorizontal: 9,
    paddingVertical: 3,
    lineHeight: 18,
    fontSize: 12,
    letterSpacing: -0.33,
    alignItems: 'center',
  },
  highEngageComment: {
    position: 'absolute',
    top: 4,
    right: 1,
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: -0.33,
    color: '#C4C4C4',
  },
  answerFooter: {
    flexDirection: 'row',
    marginTop: 11,
    marginBottom: 16.85,
    fontSize: 12,
    lineHeight: 18,
    color: '#808080',
    letterSpacing: -0.33,
  },
  answerFooterComponent: {
    flexDirection: 'row',
    marginHorizontal: 6,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 80,
    height: 80,
    width: '100%',
  },
  footerWrapper: {
    flexDirection: 'row',
  },
  answerEntry: {
    backgroundColor: '#E5E5E5',
    position: 'absolute',
    bottom: 80,
    height: 57,
    paddingHorizontal: 7,
    width: '100%',
    justifyContent: 'center',
  },
  answerEntryForm: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderRadius: 15,
    height: 40,
    paddingVertical: 8,
    paddingLeft: 8,
  },
  answerEntryFormComment: {
    position: 'absolute',
    top: 1,
    left: 154,
    color: '#C4C4C4',
    letterSpacing: -0.33,
    fontSize: 14,
    lineHeight: 21,

  },
});
