import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Answer() {
  return(
    <View>
      <View style={styles.answerCount}>
        <Text style={styles.answerCountText}>4 answers</Text>
      </View>
      <View style={styles.answerWrapper}>
        <ScrollView>
          <View style={styles.answerContent}>
            <View style={styles.answerTop}>
              <View style={styles.answerTopLeft}>
                <View style={styles.answerIcon}>
                  <Text />
                </View>
                <Text style={styles.answererOccupation}>Data Analyst(M)</Text>
              </View>
              <View style={styles.answerTopRight}>
                <Text style={styles.highEngageComment}>最高評価の回答</Text>
              </View>
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
                <Ionicons name="heart-outline" size={20} color="#808080" />
                <Text style={styles.answerFooterComponentText}>10</Text>
              </View>
              <View style={styles.answerFooterComponent}>
                <Ionicons name="ios-tv-outline" size={20} color="#808080" />
                <Text style={styles.answerFooterComponentText}>1</Text>
              </View>
            </View>
          </View>

          <View style={styles.answerContent}>
            <View style={styles.answerTop}>
              <View style={styles.answerTopLeft}>
                <View style={styles.answerIcon}>
                  <Text />
                </View>
                <Text style={styles.answererOccupation}>Data Analyst(M)</Text>
              </View>
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
                <Ionicons name="heart-outline" size={20} color="#808080" />
                <Text style={styles.answerFooterComponentText}>10</Text>
              </View>
              <View style={styles.answerFooterComponent}>
                <Ionicons name="ios-tv-outline" size={20} color="#808080" />
                <Text style={styles.answerFooterComponentText}>1</Text>
              </View>
            </View>
          </View>

          <View style={styles.answerContent}>
            <View style={styles.answerTop}>
              <View style={styles.answerTopLeft}>
                <View style={styles.answerIcon}>
                  <Text />
                </View>
                <Text style={styles.answererOccupation}>Data Analyst(M)</Text>
              </View>
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
                <Ionicons name="heart-outline" size={20} color="#808080" />
                <Text style={styles.answerFooterComponentText}>10</Text>
              </View>
              <View style={styles.answerFooterComponent}>
                <Ionicons name="ios-tv-outline" size={20} color="#808080" />
                <Text style={styles.answerFooterComponentText}>1</Text>
              </View>
            </View>
          </View>
          <View style={styles.answerContent}>
            <View style={styles.answerTop}>
              <View style={styles.answerTopLeft}>
                <View style={styles.answerIcon}>
                  <Text />
                </View>
                <Text style={styles.answererOccupation}>Data Analyst(M)</Text>
              </View>
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
                <Ionicons name="heart-outline" size={20} color="#808080" />
                <Text style={styles.answerFooterComponentText}>10</Text>
              </View>
              <View style={styles.answerFooterComponent}>
                <Ionicons name="ios-tv-outline" size={20} color="#808080" />
                <Text style={styles.answerFooterComponentText}>1</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
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
  answerWrapper: {
    height: 500,
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
    justifyContent: 'space-between',
  },
  answerTopLeft: {
    flexDirection: 'row',
  },
  answerTopRight: {
    justifyContent: 'center',
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
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: -0.33,
    color: '#C4C4C4',
  },
  answerFooter: {
    flexDirection: 'row',
    marginTop: 11,
    marginBottom: 16.85,
  },
  answerFooterComponent: {
    flexDirection: 'row',
    marginHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  answerFooterComponentText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#808080',
    letterSpacing: -0.33,
  },
});
