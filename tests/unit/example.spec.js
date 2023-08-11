import { shallowMount } from '@vue/test-utils'
import SearchView from '@/components/HelloWorld.vue'

describe('SearchView', () => {
  test('test rendering vuetify component in restaurant search page', async () => {
    const wrapper = shallowMount(SearchView)
    // render text search keyword
    expect(wrapper.find('[data-test="textsearch"]').exists()).toBe(true);
    let keyword = wrapper.find('[data-test="textsearch"]');
    expect(keyword.name()).toBe('v-text-field')
    expect(keyword.text()).toBe('')
   // render search button
    expect(wrapper.find('[data-test="btnsearch"]').exists()).toBe(true);
    let btn = wrapper.find('[data-test="btnsearch"]');
    expect(btn.name()).toBe('v-btn')
    await btn.trigger('click');
    // render table
    expect(wrapper.find('[data-test="resulttable"]').exists()).toBe(true);
    let table = wrapper.find('[data-test="resulttable"]');
    expect(table.name()).toBe('v-data-table')
  })

})
