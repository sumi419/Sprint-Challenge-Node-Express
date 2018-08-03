const express = require('express');
const server = express();
const actionModel = require('./data/helpers/actionModel');
const mappers = require('./data/helpers/mappers');
const projectModel = require('./data/helpers/projectModel');
const cors = require('cors');

server.use(express.json());
server.use(cors());

server.get('/projects', (req, res) => {
  projectModel
    .get()
    .then((projects) => {
      res.json(projects);
    })
    .catch(() => {
      res.status(500).json({ err: 'The projects cannot be found.' });
    });
});

server.get('/projects/:id', (req, res) => {
  const { id } = req.params;
  projectModel
    .get(id)
    .then((project) => {
      if (project === 0) {
        res.status(404).json({ message: 'The project doesnt exist' });
      } else {
        res.json(project);
      }
    })
    .catch(() => {
      res.status(500).json({ err: 'The project cannot be found.' });
    });
});

//returns a list of all the actions for the project
server.get('/projects/:id/actions', (req, res) => {
  const { id } = req.params;
  projectModel
    .get(id)
    .then((project) => {
      if (project === 0) {
        res.status(404).json({ message: 'The project doesnt exist' });
      } else {
        projectModel.getProjectActions(id).then((actions) => {
          res.status(201).json(actions);
        });
      }
    })
    .catch(() => {
      res.status(500).json({ err: 'The projects info cannot be found.' });
    });
});

server.post('/projects', (req, res) => {
  const project = req.body;
  if (!project.name || !project.description) {
    res.status(404).json({ error: 'Provide name and description.' });
  }
  projectModel
    .insert(project)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: 'There was an error while saving the project to the database' });
    });
});

server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;
  projectModel
    .remove(id)
    .then((project) => {
      if (project === 0) {
        res.status(404).json({ message: 'The project doesnt exist' });
      } else {
        res.status(200).json(project);
      }
    })
    .catch(() => {
      res.status(500).json({
        error: 'The project could not be deleted :('
      });
    });
});

server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const project = req.body;
  if (!project.name || !project.description) {
    res.status(404).json({ error: 'Provide name and description.' });
  }
  projectModel
    .update(id, project)
    .then((id) => {
      if (id === 0) {
        res.status(404).json({
          message: 'The project doesnt exist'
        });
      }
      res.status(200).json(id);
    })
    .catch(() => {
      res.status(500).json({ error: 'The project info could not be updated :(' });
    });
});

server.get('/actions', (req, res) => {
  actionModel
    .get()
    .then((actions) => {
      res.json(actions);
    })
    .catch(() => {
      res.status(500).json({ error: 'The actions cannot be found.' });
    });
});

server.get('/actions/:id', (req, res) => {
  const { id } = req.params;
  actionModel
    .get(id)
    .then((action) => {
      if (action === 0) {
        res.status(404).json({ message: 'The action doesnt exist' });
      } else {
        res.json(action);
      }
    })
    .catch(() => {
      res.status(500).json({ err: 'The action cannot be found.' });
    });
});

server.post('/actions', (req, res) => {
  const action = req.body;
  if (!action.project_id || !action.description || !action.notes) {
    res.status(404).json({ error: 'Provide id, description and notes.' });
  }
  actionModel
    .insert(action)
    .then((action) => {
      res.status(201).json(action);
    })
    .catch(() => {
      res.status(500).json({ error: 'There was an error while saving the action to the database' });
    });
});

server.delete('/actions/:id', (req, res) => {
  const { id } = req.params;
  actionModel
    .remove(id)
    .then((action) => {
      if (action === 0) {
        res.status(404).json({ message: 'The action doesnt exist' });
      } else {
        res.status(200).json(action);
      }
    })
    .catch(() => {
      res.status(500).json({
        error: 'The action could not be deleted :)'
      });
    });
});

server.put('/actions/:id', (req, res) => {
  const { id } = req.params;
  const action = req.body;
  if (!action.project_id || !action.description || !action.notes) {
    res.status(404).json({ error: 'Provide id, description and notes.' });
  }
  actionModel
    .update(id, action)
    .then((id) => {
      if (id === 0) {
        res.status(404).json({
          message: 'The action doesnt exist'
        });
      }
      res.status(200).json(id);
    })
    .catch(() => {
      res.status(500).json({ error: 'The action info could not be updated :(' });
    });
});

server.listen(5000, () => console.log('\n=== API running... ===\n'));
