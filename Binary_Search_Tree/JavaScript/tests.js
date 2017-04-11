import { should, expect } from 'chai';
import 'mocha';
import BST from './BST.js';

describe('Binary Search Tree tests', () => {
    it('Initially the BST is empty', () => {
      let bst = new BST();
      expect(bst.mRoot).to.be.null;
    });

    it('After inserting 5 root should have a value of 5', () => {
      let bst = new BST();
      bst.add(5);
      expect(bst.mRoot.value).to.equal(5);
    });

    it('After inserting 10, 12, 7 there should be 3 values in order', () => {
      let bst = new BST();
      bst.add(10);
      bst.add(12)
      bst.add(7);
      const vals = bst.values();
      expect(vals.length).to.equal(3);
      expect(vals).to.eql([7, 10, 12]);
    });

    it('Inserting range of values', () => {
      let bst = new BST();
      bst.addAll([5, 10, 12, 15, 20, 2, 3, 7]);
      const vals = bst.values();
      expect(vals.length).to.equal(8);
      expect(vals).to.eql([2, 3, 5, 7, 10, 12, 15, 20]);
    });

    it('Remove single value, no children', () => {
      let bst = new BST();
      bst.addAll([5, 10, 12, 15, 20, 2, 3, 7]);
      bst.remove(20);
      const vals = bst.values();
      expect(vals.length).to.equal(7);
      expect(vals).to.eql([2, 3, 5, 7, 10, 12, 15]);
    });

    it('Remove single value, has both children', () => {
      let bst = new BST();
      bst.addAll([5, 10, 12, 15, 20, 2, 3, 7]);
      bst.remove(10);
      const vals = bst.values();
      expect(vals.length).to.equal(7);
      expect(vals).to.eql([2, 3, 5, 7, 12, 15, 20]);
    });

    it('Remove single value, has right child', () => {
      let bst = new BST();
      bst.addAll([5, 10, 12, 15, 20, 2, 3, 7]);
      bst.remove(2);
      const vals = bst.values();
      expect(vals.length).to.equal(7);
      expect(vals).to.eql([3, 5, 7, 10, 12, 15, 20]);
    });

    it('Remove single value, has left child', () => {
      let bst = new BST();
      bst.addAll([5, 10, 12, 15, 20, 1, 3, 7]);
      bst.remove(1);
      const vals = bst.values();
      expect(vals.length).to.equal(7);
      expect(vals).to.eql([3, 5, 7, 10, 12, 15, 20]);
    });

    it('Remove multiple values', () => {
      let bst = new BST();
      bst.addAll([5, 10, 12, 15, 20, 1, 3, 7]);
      bst.remove(1);
      bst.remove(5);
      bst.remove(20);
      bst.remove(12);
      const vals = bst.values();
      expect(vals.length).to.equal(4);
      expect(vals).to.eql([3, 7, 10, 15]);
    });

    it('removeAll test', () => {
      let bst = new BST();
      bst.addAll([5, 10, 12, 15, 20, 1, 3, 7]);
      bst.removeAll([1, 5, 20, 12]);
      const vals = bst.values();
      expect(vals.length).to.equal(4);
      expect(vals).to.eql([3, 7, 10, 15]);
    });
  })
  // Check traverse on empty
  // Check insert multiple in add. Enforce not insert