<?php
/**
 *
 * PHP version >= 7.0
 *
 * @category Console_Command
 * @package  App\Console\Commands
 */

namespace App\Console\Commands;

use Exception;
use Illuminate\Console\Command;
use App\Http\Controllers\AuthorController;

/**
 * Class deletePostsCommand
 *
 * @category Console_Command
 * @package  App\Console\Commands
 */
class ConectDNS extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $signature = "conect:dns {host=localhost} {port=3000}";

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Conect to the DNS server";


    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //$host    = "127.0.0.1";
        //$port    = 3000;
        $host = $this->argument('host');
        $port = $this->argument('port');
        $message = "LUMEN-NODE";

        echo "Conectando em:" . $host."\n";
        echo "Porta:" . $port."\n";
        echo "Message To server :".$message."\n";

        // create socket
        $socket = socket_create(AF_INET, SOCK_STREAM, 0) or die("Could not create socket\n");

        // connect to server
        $result = socket_connect($socket, $host, $port) or die("Could not connect to server\n");

        // send string to server
        socket_write($socket, $message, strlen($message)) or die("Could not send data to server\n");

        // get server response
        $result = socket_read ($socket, 1024) or die("Could not read server response\n");
        echo "Reply From Server  :".$result."\n";
        if ($result == 'name'){
            echo "entrar aqui precisa\n";
            $controller = new AuthorController();
            $message = $controller->showOneAuthor(2);
            socket_write($socket, $message, strlen($message)) or die("Could not send data to server\n");
            //return redirect()->route('find');
        }


        // close socket
        socket_close($socket);
        echo "Conection Finished";
    }
}
