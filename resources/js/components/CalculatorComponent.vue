<script>
export default {
    data() {
        return {
            text: '',
            checked: true,
            checkedNames: ['Jack'],
            picked: 'One',
            selected: 'A',
            multiSelected: ['A']
        }
    },
    methods: {
        clear() {
            this.text = ''
        },
        insert(value) {
            this.text += value
        },
        calcul() {
            try {
                this.text = eval(this.text)
            } catch (error) {
                alert('Error Calcul Not Valid!')
            }
        },
    }
}
</script>

<template>
    <table class="calculator">
        <tr>
            <td colspan="3"> <input class="display-box" type="text" id="result" v-model="text" /> </td>
            <td> <input type="button" value="C" @click="clear" id="btn" /> </td>
        </tr>
        <tr>
            <!-- display() function displays the value of clicked button -->
            <td> <input type="button" value="1" @click="insert(1)" /> </td>
            <td> <input type="button" value="2" @click="insert(2)" /> </td>
            <td> <input type="button" value="3" @click="insert(3)" /> </td>
            <td> <input type="button" value="/" @click="insert('/')" /> </td>
        </tr>
        <tr>
            <td> <input type="button" value="4" @click="insert(4)" /> </td>
            <td> <input type="button" value="5" @click="insert(5)" /> </td>
            <td> <input type="button" value="6" @click="insert(6)" /> </td>
            <td> <input type="button" value="-" @click="insert('-')" /> </td>
        </tr>
        <tr>
            <td> <input type="button" value="7" @click="insert(7)" /> </td>
            <td> <input type="button" value="8" @click="insert(8)" /> </td>
            <td> <input type="button" value="9" @click="insert(9)" /> </td>
            <td> <input type="button" value="+" @click="insert('+')" /> </td>
        </tr>
        <tr>
            <td> <input type="button" value="." @click="insert('.')" /> </td>
            <td> <input type="button" value="0" @click="insert(0)" /> </td>
            <td> <input type="button" value="=" @click="calcul" id="btn" /> </td>
            <td> <input type="button" value="*" @click="insert('*')" /> </td>
        </tr>
    </table>
</template>
