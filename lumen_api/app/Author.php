<?php

namespace App;

class Author extends \Jenssegers\Mongodb\Eloquent\Model
{

    protected $collection = 'author';
    protected $primaryKey = '_id';

    public function comments() {

        return $this->embedsMany('Comments');

    }

    public function books()
    {
        return $this->embedsMany('App\Book');
    }

}
