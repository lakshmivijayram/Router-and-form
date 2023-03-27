import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './ArticleForm.css';

const ArticleForm = () => {

  const initialValues = {
    title: '',
    shortDescription: '',
    content: '',
    publishDate: '',
    category: '',
    author: ''
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    shortDescription: Yup.string().required('ShortDescription is required'),
    content: Yup.string().required('Content is required'),
    publishDate: Yup.date().required('Publish date is required'),
    category: Yup.string().oneOf(['Technology', 'Food', 'Travel'], 'Please select a valid category').required('Category is required'),
    author: Yup.string().required('Author is required')
  });

  const handleSubmit = (values, { resetForm }) => {
    alert('Article form submitted:', values);
    resetForm(initialValues);
  };

  return (
    <div className="article-form-container">
      <h2>Create New Article</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <Field type="text" name="title" className="form-control" />
              {errors.title && touched.title && <div className="error">{errors.title}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="shortDescription">Short Description</label>
              <Field type="text" name="shortDescription" className="form-control" />
              {errors.shortDescription && touched.shortDescription && <div className="error">{errors.shortDescription}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <Field component="textarea" name="content" className="form-control" />
              {errors.content && touched.content && <div className="error">{errors.content}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="publishDate">Publish Date</label>
              <Field type="date" name="publishDate" className="form-control" />
              {errors.publishDate && touched.publishDate && <div className="error">{errors.publishDate}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <Field as="select" name="category" className="form-control">
                <option value="">Select a category</option>
                <option value="Technology">Technology</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
              </Field>
              {errors.category && touched.category && <div className="error">{errors.category}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <Field type="text" name="author" className="form-control" />
              {errors.author && touched.author && <div className="error">{errors.author}</div>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ArticleForm;
