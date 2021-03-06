import Vue from 'vue'

const sandbox = sinon.sandbox.create()

describe('components/Loading.vue', () => {
  let vm
  let clock

  beforeEach(() => {
    clock = sandbox.useFakeTimers()
  })
  afterEach(() => sandbox.restore())

  beforeEach(() => {
    vm = new Vue(require('components/Loading')).$mount()
  })

  it('does not show spinner initially', () => {
    expect(vm.$el.querySelector('spinner')).to.not.be.ok
  })

  it('shows spinner if show=true', done => {
    Object.assign(vm, { show: true })
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('spinner')).to.be.ok
      done()
    })
  })

  it('shows spinner after 500ms', () => {
    expect(vm.$el.querySelector('spinner')).to.not.be.ok
    clock.tick(600)
    return Vue.nextTick().then(() => {
      expect(vm.$el.querySelector('spinner')).to.be.ok
    })
  })
})
