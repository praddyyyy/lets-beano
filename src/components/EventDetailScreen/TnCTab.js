import { ScrollView, Text, View } from 'react-native'
import BookNowButton from './BookNowButton'

const TnCTab = () => {

    const clubRules = [
        {
            id: 1,
            rule: 'Please adhere to the rules laid down by the club and the event organizers.'
        },
        {
            id: 2,
            rule: 'Please adhere to the rules laid down by the club and the event organizers.'
        },
        {
            id: 3,
            rule: 'Please adhere to the rules laid down by the club and the event organizers.'
        },
        {
            id: 4,
            rule: 'Please adhere to the rules laid down by the club and the event organizers.'
        },
        {
            id: 5,
            rule: 'Please adhere to the rules laid down by the club and the event organizers.'
        }
    ]

    const beanoRules = [
        {
            id: 1,
            rule: 'Please adhere to the rules laid down by Let’s Beano Coz Why Not?'
        },
        {
            id: 2,
            rule: 'Please adhere to the rules laid down by Let’s Beano Coz Why Not?'
        },
        {
            id: 3,
            rule: 'Please adhere to the rules laid down by Let’s Beano Coz Why Not?'
        },
        {
            id: 4,
            rule: 'Please adhere to the rules laid down by Let’s Beano Coz Why Not?'
        },
        {
            id: 5,
            rule: 'Please adhere to the rules laid down by Let’s Beano Coz Why Not?'
        }
    ]
    return (
        <View style={{ marginHorizontal: 15 }}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
                <View style={{ borderColor: '#fff', borderRadius: 15, borderWidth: 1, marginVertical: 15 }}>
                    <Text style={{ fontFamily: 'Montserrat_700Bold', color: '#fff', margin: 10, fontSize: 18 }}>By Club and Event Organizers</Text>
                    <View style={{ margin: 10 }}>
                        {/* <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Blinker' }}>{`\u2022 hi`}</Text> */}
                        {
                            clubRules.map((item) => {
                                return (
                                    <View key={item.id} style={{ marginBottom: 10 }}>
                                        <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Blinker_400Regular' }}>{`\u25CF ${item.rule}`}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>


                <View style={{ borderColor: '#fff', borderRadius: 15, borderWidth: 1, marginVertical: 15 }}>
                    <Text style={{ fontFamily: 'Montserrat_700Bold', color: '#fff', margin: 10, fontSize: 18 }}>By Let's Beano</Text>
                    <View style={{ margin: 10 }}>
                        {/* <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Blinker' }}>{`\u2022 hi`}</Text> */}
                        {
                            beanoRules.map((item) => {
                                return (
                                    <View key={item.id} style={{ marginBottom: 10 }}>
                                        <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Blinker_400Regular' }}>{`\u25CF ${item.rule}`}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>
            <BookNowButton />
        </View >
    )
}

export default TnCTab