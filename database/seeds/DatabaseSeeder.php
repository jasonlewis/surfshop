<?php

use Lewis\Surf\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();

        User::create([
            'name' => 'John',
            'email' => 'john@example.com',
            'password' => bcrypt('password')
        ]);
    }
}
